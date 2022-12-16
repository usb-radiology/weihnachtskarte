/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
	//define the width of the tooltip-boxes
	let box_w = "350px"
    
	//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "img/01_pub.jpg",
      "Zur Vervollständigung der PSMA (Prostata-<br>spezifisches Membranantigen)-Therapie am USB<br>haben wir das komplementäre Radiodiagnostikum<br>Ga-68-PSMA-11 eingeführt.<br>Damit können wir die notwendigen Werkzeuge<br>für die Behandlung des Prostatakarzinoms aus<br>eigener Herstellung – flexibel und unabhängig –<br>anbieten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[2] = [ "img/02_pub.jpg",
      "Beeinflusst das Wetter die Entstehung von Poly-<br>traumata und führt zu mehr Ganzkörper-CTs?<br>Anhand der Daten zu Wetter und CTs hat das<br>Forschungsteam um Dr. Martin Segeroth,<br>Assistenzarzt der Radiologie, jene Wetter-<br>bedingungen ermittelt, die mit einer Erhöhung der<br>Ganzkörper-CTs durch Polytrauma-Patient*innen<br>in Zusammenhang stehen. Demnach korreliert<br>heisseres Wetter mit mehr Sonnenschein bzw.<br>geringerer Bewölkung und schwachem Wind mit<br>einer höheren Anzahl von Polytrauma-CTs.<br>Zudem wurden von April bis September mehr<br>Polytrauma-CTs durchgeführt. Die Ergebnisse,<br>welche die Planung der Ressourcen vereinfachen<br>könnten, wurden an der Jahrestagung der Radio-<br>logical Society of North America (RSNA) vorgestellt<br>und sogleich vom radiologischen Fachforum Aunt-<br>minnie aufgegriffen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[3] = [ "img/03_18_pub_v2.jpg",
      "Der Young Researcher Award des European<br>Journal of Radiology wurde PD Dr. David Winkel,<br>stv. Oberarzt der kardialen und thorakalen Dia-<br>gnostik, für seine Co-Autorschaft einer Publikation<br>zur Genauigkeit eines Deep-Learning-Algorithmus<br>in der Krebsdiagnostik verliehen.<br>Die Wissenschaftler zeigten, dass die diagnos-<br>tische Genauigkeit eines Deep-Learning-Algo-<br>rithmus zur Klassifikation von Prostatakarzinom-<br>Läsionen in der MRT so gut ist wie in klinischen<br>Befunden.<br>Diese Erkenntnis könnte ein weiterer Schritt in<br>Richtung der klinischen Implementierung von<br>Deep-Learning-Algorithmen sein."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[4] = [ "img/04_pub_v2.jpg",
      "Künstliche Intelligenz zur Diagnostik von Hirn-<br>blutungen und zur Verbesserung des Arbeits-<br>ablaufs in der Notaufnahme: Unsere Neuro-<br>radiolog*innen um Letztautorin Dr. Kristine Black-<br>ham zeigten Genauigkeit und Sensitivität eines<br>Deep-Learning-Algorithmus zur Diagnose intra-<br>kranieller Blutungen in der CT und stellten eine<br>Beschleunigung der Arbeitsabläufe fest –<br>diese war möglich bei sorgfältiger Optimierung.<br>Der Artikel wurde sofort vom radiologischen<br>Fachforum Auntminnie aufgegriffen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[5] = [ "img/05_pub.gif",
      "Erneute Auszeichnung unseres Strahlenschutzes:<br>Zum 2. Mal hat die Europäische Gesellschaft für<br>Radiologie die Anwendung des Strahlenschutzes<br>der Radiologie am USB evaluiert und wiederum<br>mit der Höchstnote bewertet. Beurteilt wurden<br>primär die Angemessenheit der durchgeführten<br>Untersuchungen, die Einhaltung der Referenz-<br>werte, die Modernität der technischen Ausstattung<br>und die Einhaltung des Prinzips der Minimaldosis<br>(as low as reasonably achievable).<br>Die Auszeichnung ist von besonderem Wert ange-<br>sichts der steigenden Nachfrage nach medizi-<br>nischer Bildgebung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[6] = [ "img/06_pub_v2.png",
      "Die radiopharmazeutische Chemie erhielt ein hoch-<br>kompetitives Stipendium (PI: Prof. Melpomeni Fani)<br>der Innosuisse.<br>Mit Fördermitteln in Höhe von CHF 716'600 soll<br>die Behandlung von Karzinomen durch Präzisions-<br>bildgebung der Tumormikroumgebung verbessert<br>werden."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[7] = [ "img/07_pub.png",
      "Unsere Assistenzärztinnen Dr. Hildegard Wicht-<br>mann, Dr. Nadja Schönberg und Dr. Verena Hof-<br>mann erhielten für ihre herausragenden Ergeb-<br>nisse (summa cum laude, magna cum laude und<br>cum laude) bei den Facharzt-Teilprüfungen<br>Prüfungspreise der Schweizerischen Gesellschaft<br>für Radiologie (SGR-SSR).<br>Erfolgreich waren alle Assistenzärzt*innen unserer<br>Klinik – alle haben die Teilprüfungen bestanden."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[8] = [ "img/08_pub.jpg",
      "Ein Überblicksartikel zum Schlaganfall bei Kindern<br>erschien in Nature Reviews Disease Primers.<br>Erstautor ist PD Dr. Peter Sporns, Oberarzt der<br>Neuroradiologie.<br>Thematisiert werden die Ursachen und Therapie-<br>optionen von hämorrhagischen und ischämischen<br>Schlaganfällen, die im Kindesalter eine wichtige<br>Ursache für neurologische Morbidität darstellen.<br>Auch wird die Problematik gezeigt, dass das<br>Krankheitsbild des Schlaganfalls im Kindesalter<br>häufig nicht in die Differentialdiagnose einbezogen<br>wird."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[9] = [ "img/09_pub.jpg",
      "Mit dem Peptide Therapeutics Forum fand<br>im August erneut ein herausragendes Symposium<br>am USB statt.<br>Es zeigte wichtige neue Erkenntnisse zur Ent-<br>deckung und Entwicklung von Peptiden als Arznei-<br>mittel.<br>Prof. Melpomeni Fani, Leiterin der radiopharma-<br>zeutischen Chemie, gehörte erneut zu den Organi-<br>sator*innen des Forums, das unter dem Dach<br>der schweizerischen chemischen Gesellschaft<br>(Swiss Chemical Society – SCS) stattfand."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[10] = [ "img/10_pub.jpg",
      "Maurice Pradella, Oberarzt und stv. Leiter der<br>kardialen und thorakalen Radiologie, hat für seine<br>Arbeit zur Darstellung des Blutflusses in der MRT<br>den Trainee Research Prize der Radiological<br>Society of North America (RSNA) erhalten.<br>Er hatte im Rahmen seines Research Fellowship<br>in Chicago (gefördert u. a. von der American Heart<br>Association) Zusammenhänge zwischen einge-<br>schränktem Blutfluss im linken Vorhof und stillen<br>Schlaganfällen gezeigt."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[11] = [ "img/11_pub.png",
      "Dr. Francesco Santini, wissenschaftlicher Mit-<br>arbeiter der radiologischen Physik hat die Arbeits-<br>gruppe MR Safety and Quality der Europäischen<br>Gesellschaft für Radiologie (ESR) gegründet<br>und wurde zum ersten Vorsitzenden ernannt.<br>Santini vertritt derzeit die Europäische Gesellschaft<br>für Magnetresonanz in der Medizin und Biologie<br>(ESMRMB) im Ausschuss für Qualität, Sicherheit<br>und Standards. Sein Ziel ist es, die MR-Sicherheits-<br>praktiken in Europa zu harmonisieren und die<br>Weiterbildung durch ESR-gesponserte Kurse zu<br>verbessern."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[12] = [ "img/12_pub_v2.jpg",
      "Prof. Christoph J. Zech, Abteilungsleiter für inter-<br>ventionelle Radiologie, wurde zum Präsidenten<br>der SSVIR (Schweizer Gesellschaft für Vaskuläre<br>und Interventionelle Radiologie) gewählt."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[13] = [ "img/13_pub.jpg",
      "Die in Zusammenarbeit mit dem Centre hospitalier<br>universitaire vaudois in Lausanne entstandene<br>Forschungsarbeit von Dr. Rosalba Mansi et al.,<br>wissenschaftliche Mitarbeiterin der radiopharma-<br>zeutischen Chemie, wurde unter 1'834 Präsen-<br>tationen als Highlight-Vortrag für den Jahres-<br>kongress der European Association of Nuclear<br>Medicine (EANM) ausgewählt.<br>Die Arbeit zeigt einen neuen Ansatz zur Verbesse-<br>rung der Bildgebung und Therapie von neuro-<br>endokrinen Tumoren (z. B. Neuroblastom) mit<br>I-123/131-mIBG.<br>Der Kongress wurde von rund 7‘000 Teilnehmen-<br>den besucht."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[14] = [ "img/14_22_pub_v2.jpg",
      "Dr. Noemi Schmidt, Leiterin der Mammadiagnostik<br>am USB, hat das European Diploma in Breast<br>Imaging (EDBI) erlangt und sich als anerkannte<br>Expertin für Brustbildgebung ausgewiesen.<br>Das Diplom dient der standardisierten Qualifikation<br>von Expert*innen für die Bereiche Mammografie,<br>Ultraschall, MRT sowie für die Durchführung von<br>Brusteingriffen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[15] = [ "img/15_pub.jpg",
      "Fabienne Spinnler, Doktorandin der radiopharma-<br>zeutischen Chemie, erhielt den GSIA-Preis 2022<br>(Gesellschaft der Schweizerischen Industrie-<br>Apotheker*innen) für die beste Masterarbeit im<br>Studiengang Drug Sciences der Universität Basel."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[16] = [ "img/16_pub.jpg",
      "Dr. Jacopo Millul, Postdoc der radiopharmazeu-<br>tischen Chemie, erhielt einen Forschungsbeitrag<br>des Forschungsfonds für Nachwuchsforschende<br>der Universität Basel."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	
	// tooltips[17] = [ "img/18 Haben Radiologinnen.jpg",
      // "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      // ,{ background: "white", opacity: 0.98, width:box_w}]
	  
    tooltips[18] = [ "img/03_18_pub_v2.jpg",
      "David Winkel, Oberarzt der kardialen und thora-<br>kalen Radiologie, hat das ESUR-Fellowship<br>(European Society of Urogenital Radiology)<br>für seine wissenschaftlichen Leistungen<br>auf dem Gebiet der Detektion und Klassifikation<br>von Prostatakarzinomen mittels MRT sowie<br>für seine Vertretung der urogenitalen Radiologie<br>in Lehre und Forschung erhalten."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[19] = [ "img/19_pub.png",
      "Maurice Pradella, Oberarzt und stv. Leiter<br>der kardialen und thorakalen Radiologie, hat die<br>Prüfung für die Subspezialisierung in kardio-<br>vaskulärer Radiologie der European Society of<br>Cardiovascular Radiology (ESCR) erfolgreich<br>abgelegt und wurde ins European Board of Cardio-<br>vascular Radiology aufgenommen.<br>Zudem wurde er für seine Arbeit, in der er Zusam-<br>menhänge des Blutflusses im linken Vorhof<br>mit klassischen volumetrischen Parametern unter-<br>sucht hat, von der ESCR mit einem Certificate of<br>Merit ausgezeichnet."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[20] = [ "img/20_pub.jpg",
      "Wann brauchen wir wieviel Strom?<br>Wir haben analysiert, welche Geräte wann<br>abgeschaltet werden können, um Klimakrise,<br>steigenden Energiekosten und Strommangel<br>besser zu begegnen.<br>Das neue System zeigt, welche Rechner und<br>Drucker wann laufen.<br>Der Stromverbrauch kann über die Wochen<br>hinweg grafisch dargestellt und genau bemessen<br>werden: von ‹Berg› bzw. Wochentag (on) über ‹Tal›<br>bzw. Wochenende und Nacht (off)."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[21] = [ "img/21_pub.jpg",
      "Tag der Radiologie: Am 8. November, dem Jahres-<br>tag der Entdeckung der Röntgenstrahlen,<br>wurde weltweit der International Day of Radiology<br>gefeiert – auf Initiative der amerikanischen und<br>europäischen Gesellschaft für Radiologie.<br>Auch am USB wurde der Tag gefeiert.<br>Um auf ihn aufmerksam zu machen, haben Radio-<br>logie und Nuklearmedizin Plakate und Flaggen<br>angebracht sowie eine Website mit Informationen<br>entworfen."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	  
	tooltips[22] = [ "img/14_22_pub_v2.jpg",
      "Dr. Noemi Schmidt, Leiterin der Mammadiagnostik<br>am USB, wurde in das kompetitive Karriere-<br>programm Antelope aufgenommen.<br>Damit fördert die Universität Basel ausgewählte<br>Wissenschaftlerinnen."
      ,{ background: "white", opacity: 0.98, width:box_w}]	  

	tooltips[23] = [ "img/23_pub.jpg",
      "Weg vom Papier! Künftig sollen Aufklärungsbögen<br>nicht mehr ausgedruckt, sondern nur noch<br>auf dem iPad bearbeitet werden.<br>Das Pilotprojekt hat bereits in der interventionellen<br>Radiologie und Neuroradiologie begonnen."
      ,{ background: "white", opacity: 0.98, width:box_w}]	  
	  
	 

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

//MiB: auskommentiert um <br> auch auf dem Smartphone korrekt darzustellen
      // if (window && window.screen && (window.screen.width <= 576)) {
        // // text = text.replaceAll("<br>", "");
        // text = text.split("<br>").join("");
        // cssStyles.maxWidth = "400px";
      // }

      return $('<div id="' + tipid + '" class="ddimgtooltip" />')
        .html(
          '<div style="text-align:left;"><img src="' +
            tipinfo[0] +
            '" style="text-align:center; width:250px; margin-left:35px"/></div>' +
            '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:16px">' +
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
