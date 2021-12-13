/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
    //define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "images/01_Dr. Francesco Santini.jpg",
      "Dr. Francesco Santini, wissenschaftlicher Mitarbeiter der radio-<br>logischen Physik, wurde Vizepräsident der Reproducible Research<br>Study Group der International Society for Magnetic Resonance in<br>Medicine (ISMRM) und Co-Vorsitzender des Organisationskomitees<br>für den Workshop MRI Together der European Society for Magnetic<br>Resonance in Medicine and Biology (ESMRMB)."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[2] = [ "images/02_Vosshenrich.jpg",
      "Für seine Arbeit zur Auswirkung der Ermüdung von Radiologinnen<br>und Radiologen aufgrund zunehmender Arbeitsbelastung<br>hat Dr. Jan Vosshenrich, Assistenzarzt der Radiologie, den Young<br>Investigator Award der Schweizerischen Gesellschaft für Radiologie<br>(SGR-SSR) erhalten.<br>Die Arbeit, die auch Empfehlungen zur Erhaltung der diagnostischen<br>Genauigkeit umfasst, wurde in Radiology publiziert und zeitnah<br>von der Radiological Society of North America (RSNA) rezipiert."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[3] = [ "images/03_Anfang Oktober.jpg",
      "Anfang Oktober konnte die Nuklearmedizin das zweite PET/CT (Posi-<br>tronen-Emissions-Tomografie/Computertomografie)-Gerät in Betrieb<br>nehmen.<br>Damit wurde die zeitnahe Verfügbarkeit von PET/CT-Untersuchungen<br>deutlich verbessert."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[4] = [ "images/04_IRZech.jpg",
      "Prof. Christoph Zech, Leiter der interventionellen Radiologie,<br>ist für 2021–23 als Mitglied im Executive Committee der<br>European Society of Gastrointestinal and Abdominal Radiology<br>(ESGAR) bestätigt worden.<br>Er übernimmt neu das Amt des Education Committee Chairs."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[5] = [ "images/05_Die Nuklearmedizin.jpg",
      "Die Nuklearmedizin hat als Hauptantragsteller kompetitive Projekt-<br>fördermittel von der Universität Basel (Dr. Federico Caobelli),<br>der regionalen Krebsliga beider Basel (Dr. Alin Chirindel) und vom<br>Schweizerischen Nationalfonds (SNF) (Prof. Damian Wild) von<br>rund CHF 1’000’000 erhalten."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[6] = [ "images/06_PD Peter Sporns.jpg",
      "PD Peter Sporns, Oberarzt der Neuroradiologie, hat mit einem<br>Expertenteam aus Kanada und den USA einen Übersichtsartikel<br>zum pädiatrischen ischämischen Schlaganfall erarbeitet und in<br>The Lancet Child & Adolescent Health publiziert."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[7] = [ "images/07_Nuk.jpg",
      "Obwohl wir die 177Lu-PSMA Therapie erst seit Mai 2020 anbieten,<br>hat die Nuklearmedizin in Zusammenarbeit mit der radiopharma-<br>zeutischen Chemie bereits 217 solcher Therapien bei Patienten mit<br>metastasiertem, kastrationsresistentem Prostata-Karzinom<br>durchgeführt (bis Ende Oktober 2021).<br>Zur Auswertung der Therapiedaten hat sie ein nationales Register für<br>diese Therapie eingeführt."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[8] = [ "images/08_Die European Association .jpg",
      "Die European Association of Nuclear Medicine (EANM) hat nach einem<br>multidisziplinären Delphi-Verfahren, an dem 31 international aner-<br>kannte Experten beteiligt waren, einen Konsens zu neuroendokrinen<br>Neoplasmen erzielt.<br>Beteiligt waren Prof. Melpomeni Fani (radiopharmazeutische Chemie)<br>und Prof. Damian Wild (Nuklearmedizin)."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[9] = [ "images/09_Die 2019 eingeführte.jpg",
      "Die 2019 eingeführte Behandlung von Schilddrüsenknoten mittels<br>Radiofrequenzablation hat sich etabliert.<br>Sie wird von unseren Patienten ausnahmslos als eine sehr wenig<br>belastende Methode wahrgenommen – mit sehr gutem Behandlungs-<br>erfolg und unter Erhalt der Schilddrüsenfunktion."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[10] = [ "images/10_Das Team um.jpg",
      "Das Team um Dr. Orso Pusterla, wissenschaftlicher Mitarbeiter der<br>radiologischen Physik, wurde am Kongress der European Society for<br>Magnetic Resonance in Medicine and Biology (ESMRMB) mit einem<br>Magna-Cum-Laude-Preis für den besten Abstract (für die besten 1%)<br>ausgezeichnet.<br>Er hat eine neue, von einem neuronalen Netzwerk gesteuerte<br>Methode zur 3D-Quantifizierung der Lungenventilation anhand von<br>0,55 T-MRT-Aufnahmen bei freier Atmung vorgestellt. "
      ,{ background: "white", opacity: 0.98 }]

    tooltips[11] = [ "images/11_Für jährlich.jpg",
      "Für jährlich rund 6000 CT-Untersuchungen des Thorax hat unser<br>Forschungsteam einen Open-Source-Algorithmus entwickelt,<br>der automatisch Infiltrate und Pleuraergüsse quantifiziert und charakterisiert.<br>Die Ergebnisse sind direkt im PACS (Bildarchivierungs- und Kommuni-<br>kationssystem der Radiologie) als Lung-Report verfügbar."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[12] = [ "images/12_Roya Afshari.jpg",
      "Roya Afshari, Doktorandin der radiologischen Physik, und ihre wissen-<br>schaftlichen Kollegen wurden am Kongress der International Society<br>for Magnetic Resonance in Medicine (ISMRM) mit einem Magna-Cum-<br>Laude-Preis für ihr Poster zur qMT-Bildgebung (quantitativer Magneti-<br>sierungstransfer) des gesamten Hirns in weniger als 5 Minuten geehrt.<br>Die Arbeit eröffnet sehr gute Aussichten für die klinische Anwendung<br>der qMT-Bildgebung in der neurologischen Diagnostik."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[13] = [ "images/13_Erfolgreiche GMP.jpg",
      "Erfolgreiche GMP-Inspektion: Nach dreijähriger Betriebszeit des GMP-<br>Labors (Good Manufacturing Practice) wurde die periodische pharma-<br>zeutische Inspektion durch das regionale Heilmittelinspektorat durch-<br>geführt – mit erfolgreichem Verlauf und Verlängerung der Betriebs-<br>bewilligung."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[14] = [ "images/14_Der Preis für.jpg",
      "Der Preis für die beste Diplomarbeit der diplomierten Radiologie-<br>fachpersonen HF ging an unseren Absolventen Thomas Stocker.<br>Er erhielt ihn vom Bildungszentrum Gesundheit Basel-Stadt (BZG)<br>für seine Arbeit «Spätfolgen der pädiatrischen Radiotherapie»."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[15] = [ "images/15_Winkel.jpg",
      "Wir konnten zeigen, dass die vollautomatische Bewertung von<br>Koronararterienkalk mit einem auf Deep Learning basierenden<br>Algorithmus möglich ist – gesamthaft und gefässspezifisch.<br>Die Ergebnisse des Forschungsteams um Dr. David Winkel, Fellow<br>der kardiothorakalen Radiologie, konnten im European Heart Journal<br>publiziert werden."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[16] = [ "images/16_Der Kongress der.jpg",
      "Der Kongress der Schweizerischen Gesellschaft für Senologie<br>für Mamma-Radiologen, Senologen, Brustchirurgen und Gynäkologen<br>wurde dieses Jahr von Dr. Sophie Dellas mitorganisiert. Das Team der<br>Mammadiagnostik war mit Vorträgen und Kursen beteiligt.<br><br>Dr. Noemi Schmidt hat die Leitung der Mammadiagnostik von<br>Dr. Sophie Dellas übernommen. Sophie Dellas tritt nicht ganz in den<br>Ruhestand; sie bleibt dem USB als Senior Consultant erhalten."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[17] = [ "images/17_Als eine der ersten.jpg",
      "Als zweite Klinik weltweit haben wir einen Magnetresonanztomo-<br>grafen mit einer Feldstärke von 0.55 Tesla (Magnetom Free.Max<br>von Siemens Healthineers) installiert.<br>Das ungewöhnliche Gerät bietet Vorteile wie den geringen Helium-<br>bedarf und den einfachen Einbau. Der Tomograf, der einen weiten<br>Durchmesser (80 cm) aufweist, wird vor allem für Patientinnen und<br>Patienten mit Metallimplantaten, für die Diagnostik der Wirbelsäule,<br>für die (experimentelle) Lungenbildgebung und für Patienten mit<br>Platzangst eingesetzt."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[18] = [ "images/18_Kolakovic.jpg",
      "Bei der diesjährigen Posterpräsentation des Bildungszentrums<br>Gesundheit Basel-Stadt (BZG) erhielt unsere Studentin Menusha<br>Pathmakanthan den ersten Preis für ihr Poster «Die Lungen-<br>sonographie als Alternative zur Computertomographie bei Covid-19-<br>infizierten Patientinnen und Patienten»."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[19] = [ "images/19_Wir erweitern.jpg",
      "Wir erweitern unsere Ansätze in der präklinischen Forschung<br>und schaffen gemeinsame Doktorandenstellen mit dem Swiss<br>Nanoscience Institute (SNI) der Universität Basel.<br>Das neue Programm erforscht innovative katalytische Strategien<br>zur Krebsbekämpfung."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[20] = [ "images/20_Alle fünf.jpg",
      "Alle fünf Studierenden des Bildungsgangs 2018–21 haben ihre<br>Ausbildung zur diplomierten Radiologiefachperson HF erfolgreich<br>abgeschlossen – vier Absolventinnen und Absolventen bleiben<br>unserem Team erhalten."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[21] = [ "images/21_Das in Radiology.jpeg",
      "Das in Radiology publizierte Bild zur Arbeit «Radiologist Mouse Move-<br>ments at a PACS Workstation» unserer Assistenzärzte Dr. Jan Voss-<br>henrich und Dr. Hanns-Christian Breit wurde als einer von drei<br>Finalisten für den Top Images in Radiology Award ausgewählt.<br>Für die Arbeit zum Workload von Radiologen wurden die Maus-<br>bewegungen eines Assistenzarztes auf Bildschirmen des Bildarchivie-<br>rungs- und Kommunikationssystems während einer 8-Stunden-Schicht<br>aufgezeichnet. Sie summierten auf 2,2 km und 10’778 Tastenanschläge<br>(23 Anschläge pro Minute)."
      ,{ background: "white", opacity: 0.98 }]

    tooltips[22] = [ "images/22_Das 3D Print Lab.jpg",
      "Das 3D Print Lab druckt vor Ort Patientenmodelle und Implantate, was<br>Zeit, Material, Transport und Kosten spart. Bis 2020 entstand regel-<br>mässig Abfall durch ausgediente Prototypen, Test- und Fehldrucke<br>sowie Stützmaterial. Nun werden biologisch abbaubare Materialien<br>(wieder)verwendet; ausgedientes Material wird gesammelt. Durch die<br>Investition in einen spezialisierten Häcksler können aus recyceltem<br>Material neue Modelle hergestellt werden.<br>Für dieses Recyclingsystem hat uns das USB den KVP-Preis Nachhaltig-<br>keit verliehen. "
      ,{ background: "white", opacity: 0.98 }]

    tooltips[23] = [ "images/23_RadPh.jpg",
      "PD Grzegorz Bauman, wissenschaftlicher Mitarbeiter der radio-<br>logischen Physik, wurde die Venia docendi erteilt. "
      ,{ background: "white", opacity: 0.98 }]

    return tooltips; //do not remove/change this line
  })(),

  tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

  //***** NO NEED TO EDIT BEYOND HERE

  tipprefix: "imgtip", //tooltip ID prefixes

  createtip: function ($, tipid, tipinfo) {
    if ($("#" + tipid).length == 0) {
      //if this tooltip doesn't exist yet
      var text = tipinfo[1] || "";
      var cssStyles = tipinfo[2] || {};

      if (window && window.screen && (window.screen.width <= 576)) {
        // text = text.replaceAll("<br>", "");
        text = text.split("<br>").join("");
        cssStyles.maxWidth = "400px";
      }

      return $('<div id="' + tipid + '" class="ddimgtooltip" />')
        .html(
          '<div style="text-align:center; margin-top:20px"><img src="' +
            tipinfo[0] +
            '" /></div>' +
            '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:30px">' +
                text +
                "</div>"
        )
        .css(cssStyles)
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
        $target.mousedown(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseup(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseenter(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseleave(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.hidebox($, $tooltip, e);
        });
        $target.mousemove(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.positiontooltip($, $tooltip, e);
        });
        if ($tooltip) {
          $tooltip.mouseenter(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mousedown(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mouseup(function () {
            ddimgtooltip.hidebox($, $(this));
          });
        }
      });
    }); //end dom ready
  }
};

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]");
