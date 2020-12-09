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
      "Prämierter Legostein in der nano-SPECT/CT:<br>Der unter Mitwirkung von Guillaume Nicolas, Oberarzt der Nuklear-<br>medizin, entstandene Film zeigt, wie ein neuer mobiler Detektor<br>nuklearmedizinische Bildgebung einsetzen und Radioaktivität intra-<br>operativ visualisieren könnte.<br>Er erhielt den 1. Preis des Bildwettbewerbs des SNF.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[2] = [
      "pic/02 Ein neues.jpg",
      "Ein neues Medikament könnte helfen, nach einem<br>Schlaganfall Gehirnzellen zu erhalten.<br>Die unter Beteiligung unserer Neuroradiologen erzielten<br>Forschungsergebnisse wurden in der Zeitschrift<br>«The Lancet» veröffentlicht. In der internationalen<br>Studie konnte gezeigt werden, dass der Wirkstoff Neri-<br>netid bei einer Subgruppe von Patienten das Therapie-<br>ergebnis signifikant verbessern konnte.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[3] = [
      "pic/03 Im Mai.jpg",
      "Im Mai ist am USB der erste Patient mit Lutetium-177-<br>PSMA erfolgreich behandelt worden. Damit sind wir<br>das erste Schweizer Spital, das Lu-177-PSMA zur Thera-<br>pie des fortgeschrittenen, metastasierten Prostata-<br>karzinoms im Haus produziert und anwendet.<br>Diese vielversprechende neue Behandlungsmethode<br>gegen den häufigsten bösartigen Tumor bzw. die zweit-<br>häufigste Todesursache beim Mann ist durch den ge-<br>meinsamen Effort der radiopharmazeutischen Chemie<br>und der Nuklearmedizin verfügbar.<br>Die Nuklearmedizin kann zudem das aktive Tumor-<br>volumen automatisiert in der posttherapeutischen Lu-<br>177-PSMA-Bildgebung quantifizieren und das Therapie-<br>ansprechen unmittelbar monitorisieren.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[4] = [
      "pic/04 Die Volumendarstellung.gif",
      "Die Volumendarstellung zeigt, dass atypische Pneumo-<br>nien, wie sie bei COVID-19 erkrankten Patienten auf-<br>treten, mit der CT exzellent detektiert werden können.<br>Wir haben eine Methode entwickelt, mit der die Infil-<br>trate qualitativ beschrieben und vollautomatisiert<br>quantifiziert werden können.<br>Aus den bildbasierten Biomarkern können wertvolle <br/>Informationen über Schweregrad und Verlauf der Er-<br>krankung abgeleitet werden. Unsere Ergebnisse wurden<br>in verschiedenen Fachzeitschriften publiziert.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[5] = [
      "pic/05 Nicht nur.jpg",
      "Nicht nur für unsere COVID-Patientinnen und -Patienten<br>blieb das CT-Team dieses Jahr oft länger am USB.<br>Die deutliche Zunahme, insbesondere von CT-Unter-<br>suchungen des Thorax, war – obwohl sie füreinander ein-<br>standen – für alle spürbar.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[6] = [
      "pic/06 Die neue.jpg",
      "Die neue Methode für die hoch aufgelöste thorakale<br>MRT zierte das Titelbild der Juli-Ausgabe der Zeitschrift<br>«Magnetic Resonance in Medicine».<br>Entwickelt haben sie unsere Physiker Dr. Grzegorz Bau-<br>man und Prof. Oliver Bieri.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[7] = [
      "pic/07 Die Pandemie.jpg",
      "Die Pandemie hat den digitalen Wandel weiter be-<br>schleunigt und stellt uns auch in der Lehre vor neue<br>Herausforderungen. Deshalb haben wir RapMed, eine<br>neue, auf Crowdsourcing-Technologie basierende,<br>E-Learning-Plattform entwickelt.<br>Crowdsourcing ermöglicht es Studierenden, gemeinsam<br>an der Lösung von Fällen zu arbeiten und reduziert den<br>Aufwand zur Bereitstellung von Lehrinhalten.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[8] = [
      "pic/08 1 Million.jpg",
      "1 Million für die Forschung: Die radiopharmazeutische<br>Chemie erhielt zwei der umworbensten Fördermittel<br>der Schweiz von SNF (CHF 453'193) und Innosuisse<br>(CHF 559'295). Hauptantragstellerin war Prof. Melpo-<br>meni Fani, Leiterin der radiopharmazeutischen Chemie.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[9] = [
      "pic/09 Der neue.jpg",
      "Der neue Computertomograf (Siemens Somatom Defi-<br>nition Force) ermöglicht uns noch präzisere Quanti-<br>fizierungen bei branchenweit schnellster Scanzeit und<br>weiterer Optimierung der Strahlendosis.<br>Erreicht wird die für unsere Patienten aussage-<br>kräftigere, schonendere und schnellere 4D-Bildgebung<br>mittels Dual Energy-Technik. ",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[10] = [
      "pic/10 rippen_thorax_weihnachtsbaum.jpg",
      "Was aussieht wie ein Christbäumchen ist das Ergebnis<br>der Suche eines Algorithmus.<br>Der zur Auswertung einer CT eingesetzte Algorithmus<br>hat mittels künstlicher Intelligenz Wirbelsäule und<br>Rippenthorax gesucht. Und gefunden.  ",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[11] = [
      "pic/11 An der.jpg",
      "An der diesjährigen Poster-Präsentation des Bildungs-<br>zentrums Gesundheit Basel-Stadt (BZG) erreichten gleich<br>zwei unserer Studierenden das Podest:<br>David Hunn (1. Platz für «Astronauten und die Welt-<br>raumstrahlung») und Thomas Stocker (3. Platz für<br>«Intraossäre Kontrastmittelgabe am CT»).<br>Herzlichen Glückwunsch!",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[12] = [
      "pic/12 Die Qualität.jpg",
      "Die Qualität der Weiterbildung ist uns wichtig.<br>Wir freuen uns sehr, dass wir zum wiederholten Mal als<br>beste universitäre Weiterbildungsstätte für Radiologie<br>der Schweiz bewertet wurden.<br>Zu diesem Ergebnis kam die FMH aufgrund ihrer<br>schweizweiten Evaluation aller radiologischen Weiter-<br>bildungsstätten.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[13] = [
      "pic/13 Während der.jpg",
      "Während der ersten Welle beschloss die Task-Force<br>COVID-19 des USB, den Hybrid-OP9 für die Bildgebung<br>von COVID-Patienten zu nutzen.<br>Damit konnten die Wege zur Notfallstation verkürzt so-<br>wie die Untersuchung und Verlegung auf die Kohorten-<br>oder Intensiv-Stationen beschleunigt werden.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[14] = [
      "pic/14 Eine ungewöhnliche.jpg",
      "Eine ungewöhnliche Patientin, eine neapolitanische<br>Geige von 1910–1915, wurde wegen surrender Neben-<br>geräusche mittels CT untersucht. Zum Vorschein kamen<br>unterhalb des Bassbalkens mehrere Lufteinschlüsse<br>sowie ein kleines Metallstück.<br>Denkbar ist, dass ein Geigenbauer durch die Löcher ent-<br>standene Schwingungen mit dem Metall tilgen wollte.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[15] = [
      "pic/15 Prof Melpomeni.jpg",
      "Prof. Melpomeni Fani, Leiterin der radiopharmazeutischen Chemie,<br>leitete die Plenarsitzung 3 und hielt den ersten Vortrag am euro-<br>päischen Kongress der Nuklearmedizin (EANM). <br>Die Sitzung war dem Thema «Radiopharmazeutika der nächsten Gene-<br>ration» mit über 1000 Teilnehmern gewidmet.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[16] = [
      "pic/16 Die aktuellen.jpg",
      "Die aktuellen Ergebnisse der Lumed-Studie konnten in der «Top<br>Rated Oral Presentation»- und der «Highlight»-Session am euro-<br>päischen Kongress der Nuklearmedizin (EANM) vorgestellt <br>werden.<br>Inhalt der Studie ist der Einsatz von 177-Lu-PP-F11N für die<br>rezeptorgesteuerte Therapie und Bildgebung des metastasierten<br>medullären Schilddrüsenkrebses.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[17] = [
      "pic/17 Alle Studierenden.jpg",
      "Alle Studierenden des Bildungsgangs MTR 17<br>haben erfolgreich ihre Ausbildung zur dipl. Radiologie-<br>fachperson HF abgeschlossen.<br>Wir gratulieren ganz herzlich und wünschen ihnen<br>viel Erfolg im weiteren Berufsleben.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[18] = [
      "pic/18 2 von 10.jpg",
      "2 von 10 Abstracts der «Hot Topic Session – EANM 2020<br>Best Clinical Trials» am europäischen Kongress der Nuk-<br>learmedizin waren Beiträge der Nuklearmedizin Basel.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[19] = [
      "pic/19 Rochade auf.jpg",
      "Rochade auf einer Drehscheibe: Samantha Schmied hat<br>die Leitung der Anmeldung von Radiologie und Nuklear-<br>medizin von Alexandra Streuber übernommen, die sich<br>wieder dem Controlling widmet.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[20] = [
      "pic/20 Automatisierung des.jpg",
      "Automatisierung des Bildimports vorangetrieben:<br>Seit März werden unsere Fremdaufnahmen automatisch<br>importiert. Die neue, mit der Radiologie konfigurierte,<br>Software PAN Import filtert Daten aus den Bildinforma-<br>tionen und ordnet diese automatisch dem richtigen<br>Patienten zu. Zudem erkennt sie anhand der Bilddaten,<br>um welche Untersuchung es sich handelt.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[21] = [
      "pic/21 Der diesjährige.jpg",
      "Der diesjährige Bildungsgang MTR hat im September<br>am USB mit 9 Studierenden gestartet.<br>Wir wünschen ihnen für die kommenden 3 Jahre<br>viel Erfolg und Freude, diesen spannenden Beruf zu<br>erlernen. ",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[22] = [
      "pic/22 Das erstmals.jpg",
      "Das erstmals von Radiologiefachpersonen der inter-<br>ventionellen Neuroradiologie und der Firma Micro-<br>vention angebotene Webinar für Radiologiefach-<br>personen war mit 65 Teilnehmern aus der Schweiz,<br>Deutschland und Österreich sehr erfolgreich.<br>Ein 2. Webinar ist bereits für Frühjahr 2021 geplant.",
      { background: "white", opacity: 0.95 },
    ];

    tooltips[23] = [
      "pic/Rätsel Christbaumkugeln.jpg",
      "Christbaumkugeln oder Blüten einer Passionsblume?<br>Unser Weihnachtsrätsel bezaubert auch in der MRT<br>durch seine pentagonal-ausgewogene Struktur.<br>(Profan mag interessieren, dass es unter Verwendung<br>einer 64-Kanal-Kopf/Hals-Spule mittels T1-gewichteter<br>TIRM- und T2-gewichteter 3D-SPACE-Sequenz im 3T-<br>Magnetom Prisma entstand.)<br>Die ersten drei Personen, die uns schreiben<br>(sekretariat.krn@usb.ch), was aufgenommen wurde, er-<br>halten eine kleine Aufmerksamkeit.",
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
