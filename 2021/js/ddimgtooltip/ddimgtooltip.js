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
      "pic/Test.jpg",
      "Roya Afshari, Doktorandin der radiologischen Physik, und ihre<br>wissenschaftlichen Kollegen wurden am Kongres der International<br>Society for Magnetic Resonance in Medicine (ISMRM) mit einem<br>Magna-Cum-Laude-Preis für die Arbeit zur qMT-Bildgebung <br>(quantitativer Magnetisierungstransfer) des gesamten Hirns <br>in weniger als 5 Minuten geehrt. <br>Diese eröffnet hervorragende Aussichten für Prognose und<br>Diagnose neurologischer Erkrankungen.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[2] = [
      "pic/Test.gif",
      "Das Team um Dr. Orso Pusterla, wissenschaftlicher Mitarbeiter<br>der radiologischen Physik, wurde am Kongress der European Society<br>for Magnetic Resonance in Medicine and Biology (ESMRMB) mit einem<br>«Magna-Cum-Laude-Preis für den besten Abstract» (für die besten 1%)<br>ausgezeichnet.<br>Es stellte eine neue, von einem neuronalen Netzwerk gesteuerte<br>Methode zur 3D-Quantifizierung der Lungenventilation anhand<br>von MRT-Aufnahmen mit freier Atmung bei 0,55 T vor.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[3] = [
      "pic/",
      "Blublu",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[4] = [
      "pic/",
      "Text4",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[5] = [
      "pic/",
      "Text5",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[6] = [
      "pic/",
      "Text6",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[7] = [
      "pic/",
      "Text7",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[8] = [
      "pic/",
      "Text8", 
      { background: "white", opacity: 0.95 },
    ];

    tooltips[9] = [
      "pic/",
      "Text9",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[10] = [
      "pic/",
      "Text10",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[11] = [
      "pic/",
      "Text11",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[12] = [
      "pic/",
      "Text12",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[13] = [
      "pic/",
      "Text13",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[14] = [
      "pic/",
      "Text14",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[15] = [
      "pic/",
      "Text15",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[16] = [
      "pic/",
      "Text16",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[17] = [
      "pic/",
      "Text17",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[18] = [
      "pic/",
      "Text18",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[19] = [
      "pic/",
      "Text19",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[20] = [
      "pic/",
      "Text20",
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
