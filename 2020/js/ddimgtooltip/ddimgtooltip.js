/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = [];
    //define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [
      "pic/01 film.gif",
      "Prämierter Legostein in der nano-SPECT/CT:<br>Der unter Mitwirkung von Guillaume Nicolas, Oberarzt der Nuklear-<br>medizin, entstandene Film zeigt, wie ein neuer mobiler<br>Detektor nuklearmedizinische Bildgebung einsetzen und<br>Radioaktivität intraoperativ visualisieren könnte.<br>Er erhielt den 1. Preis des Bildwettbewerbs des SNF.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[2] = [
      "pic/02 Ein neues.jpg",
      "Ein neues Medikament könnte helfen, nach einem<br>Schlaganfall Gehirnzellen zu erhalten.<br>Die unter Beteiligung unserer Neuroradiologen erzielten<br>Forschungsergebnisse wurden in der Zeitschrift<br>«The Lancet» veröffentlicht. In der internationalen<br>Studie konnte gezeigt werden, dass der Wirkstoff Neri-<br>netid bei einer Subgruppe von Patienten das Therapie-<br>ergebnis signifikant verbessern konnte.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[3] = [
      "pic/03 Im Mai.jpg",
      "Im Mai ist am USB der erste Patient mit Lutetium-177-<br>PSMA erfolgreich behandelt worden. Damit sind wir-<br>das erste Schweizer Spital, das Lu-177-PSMA zur Thera--<br>pie des fortgeschrittenen, metastasierten Prostata-<br>karzinoms im Haus produziert und anwendet.<br>Diese vielversprechende neue Behandlungsmethode<br>gegen den häufigsten bösartigen Tumor bzw. die zweit-<br>häufigste Todesursache beim Mann ist durch den ge-<br>meinsamen Effort der radiopharmazeutischen Chemie<br>und der Nuklearmedizin verfügbar.<br>Die Nuklearmedizin kann zudem das aktive Tumor-<br>volumen automatisiert in der posttherapeutischen Lu-<br>177-PSMA-Bildgebung quantifizieren und das Therapie-<br>ansprechen unmittelbar monitorisieren.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[4] = [
      "pic/04 Die Volumendarstellung.gif",
      "Die Volumendarstellung zeigt, dass atypische Pneumo-<br>nien, wie sie bei COVID-19 erkrankten Patienten auf-<br>treten, mit der CT exzellent detektiert werden können.<br>Wir haben eine Methode entwickelt, mit der die Infil-<br>trate qualitativ beschrieben<br>und vollautomatisiert quantifiziert werden können.<br>Aus den bildbasierten Biomarkern können wertvolle <br/> Informationen über Schweregrad und Verlauf der Er-<br>krankung abgeleitet werden. Unsere Ergebnisse wurden<br>in verschiedenen Fachzeitschriften publiziert.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[5] = [
      "pic/05 Nicht nur.jpg",
      "Nicht nur für unsere COVID-Patientinnen und -Patienten<br>blieb das CT-Team dieses Jahr oft länger am USB.<br>Die deutliche Zunahme, insbesondere von CT-Unter-<br>suchungen des Thorax, war – obwohl sie füreinander ein-<br>standen – für alle spürbar.",
      { background: "white", opacity: 0.95 },
    ];

    return tooltips; //do not remove/change this line
  })(),

  tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

  //***** NO NEED TO EDIT BEYOND HERE

  tipprefix: "imgtip", //tooltip ID prefixes

  createtip: function ($, tipid, tipinfo) {
    if ($("#" + tipid).length == 0) {
      //if this tooltip doesn't exist yet
      return $('<div id="' + tipid + '" class="ddimgtooltip" />')
        .html(
          '<div style="text-align:center; margin-top:20px"><img src="' +
            tipinfo[0] +
            '" /></div>' +
            (tipinfo[1]
              ? '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:30px">' +
                tipinfo[1] +
                "</div>"
              : "")
        )
        .css(tipinfo[2] || {})
        .appendTo(document.body);
    }
    return null;
  },

  positiontooltip: function ($, $tooltip, e) {
    var x = e.pageX + this.tooltipoffsets[0],
      y = e.pageY + this.tooltipoffsets[1];
    var tipw = $tooltip.outerWidth(),
      tiph = $tooltip.outerHeight(),
      x = x + tipw > $(document).scrollLeft() + $(window).width() ? x - tipw - ddimgtooltip.tooltipoffsets[0] * 2 : x;
    y =
      y + tiph > $(document).scrollTop() + $(window).height()
        ? $(document).scrollTop() + $(window).height() - tiph - 10
        : y;
    $tooltip.css({ left: x, top: y });
  },

  showbox: function ($, $tooltip, e) {
    $tooltip.show();
    this.positiontooltip($, $tooltip, e);
  },

  hidebox: function ($, $tooltip) {
    $tooltip.hide();
  },

  init: function (targetselector) {
    jQuery(document).ready(function ($) {
      var tiparray = ddimgtooltip.tiparray;
      var $targets = $(targetselector);
      if ($targets.length == 0) return;
      var tipids = [];
      $targets.each(function () {
        var $target = $(this);
        $target.attr("rel").match(/\[(\d+)\]/); //match d of attribute rel="imgtip[d]"
        var tipsuffix = parseInt(RegExp.$1); //get d as integer
        var tipid = (this._tipid = ddimgtooltip.tipprefix + tipsuffix); //construct this tip's ID value and remember it
        var $tooltip = ddimgtooltip.createtip($, tipid, tiparray[tipsuffix]);
        $target.mouseenter(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseleave(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.hidebox($, $tooltip);
        });
        $target.mousemove(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.positiontooltip($, $tooltip, e);
        });
        if ($tooltip) {
          //add mouseenter to this tooltip (only if event hasn't already been added)
          $tooltip.mouseenter(function () {
            ddimgtooltip.hidebox($, $(this));
          });
        }
      });
    }); //end dom ready
  },
};

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]");
