var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[1]=["images/kugel/01_IR_e1.gif", 
		"Die nach dreimonatiger Bauphase in Betrieb genommene neue <br> Angiografieanlage verbessert die dreidimensionale Bildgebung <br>und ermöglicht genauere, schonendere und schnellere Eingriffe. <br> Wir danken unseren Zuweisern für die Geduld bei der mitunter <br> schwierigen Terminfindung während der Bauzeit."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]
        
		tooltips[2]=["images/kugel/02_NUK_e.jpg",
		"Die Studie mit CCK2 (Cholezystokinin)-2-Rezeptor-<br>Radiotracern für die Therapie von Patienten mit fort-<br>geschrittenem medullären Schilddrüsenkarzinom wurde<br>von unseren Wissenschaftlern der Nuklearmedizin<br>zum ersten Mal erfolgreich am Menschen durchgeführt."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]

		tooltips[3]=["images/kugel/03_Strahlenschutz_e.jpg",
		"Wir engagieren uns für den Strahlenschutz. Und sehen es<br>als Highlight, dass dies 2017 mehrfach bestätigt wurde,<br>etwa durch die Auswertung der Strahlendosen des Spital-<br>personals des BAG (wir unterschreiten die gesetzlichen<br>Grenzwerte um das 10- bis 14-Fache und müssen den<br>schweizweiten Vergleich keinesfalls scheuen) oder durch <br> den Auditbericht des BAG zur Computertomografie.<br>Er kam zum Schluss: «Dem Strahlenschutz in der Klinik<br>für Radiologie und Nuklearmedizin wird erfreulicherweise<br>eine hohe Bedeutung beigemessen»."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]

		tooltips[4]=["images/kugel/04_RadPhysik_e.png",
		"Damien Nguyen, Doktorand der Radiologischen Physik, hat <br> von der International Society for Magnetic Resonance in <br> Medicine einen «Summa Cum Laude»-Award für seinen <br> Beitrag zu quantitativen Bildgebung in der MRT erhalten. <br> Mittels einer innovativen Analysemethode entwickelte <br> Nguyen quantitative 2D-Karten zur Visualisierung der <br> Mikrostruktur der Hirngewebe."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		
		
		tooltips[5]=["images/kugel/05_RadChem_e.jpg",
		"Die Ende 2017 fertig gestellten Forschungseinrichtungen für<br>die Entwicklung neuer Radiopharmazeutika erlauben –<br>zusammen mit der ebenfalls neu geschaffenen GMP-<br>Produktionsumgebung – eine rasche Implementierung<br>aussichtsreicher Neuentwicklungen im klinischen Umfeld.<br> Sie sind Voraussetzung für eine viel versprechende Platt-<br> form zur Stärkung der translationalen Forschung am USB."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		
		
		tooltips[6]=["images/kugel/06_Weiterbildung_e.jpg",
		"Die Qualität der Weiterbildung ist uns wichtig.<br>Wir freuen uns sehr, dass wir das 3. Jahr in Folge als beste<br>universitäre Weiterbildungsstätte für Radiologie der Schweiz<br> bewertet wurden.<br>Zu diesem Ergebnis kam die FMH aufgrund ihrer schweiz-<br>weiten Evaluation aller radiologischen Weiterbildungs-<br>stätten."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[7]=["images/kugel/07_MSK_e.jpg",
		"Radiologische Bilder offenbaren mitunter unerwartete<br>Einblicke. Die Darstellung des Absaugsystems eines VAC-<br>Verbands (Vacuum Assisted Closure) in der Computer-<br>tomografie führte indes bei den Radiologinnen und Radio-<br>logen der muskuloskelettalen Diagnostik zu beispielloser<br>Erheiterung."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[8]=["images/kugel/08_LungStage_e.jpg",
		"Deutliche Vorschritte, aber auch fröhliche Begeisterung<br>erzielte das von der Kommission für Technologie und Inno-<br>vation (KTI) geförderte Forschungsprojekt Lung Stage zur <br> automatischen Detektion und Stadienbestimmung (Staging)<br>von Lungentumoren. Wissenschaftler der Radiologie, Onkologie<br>und des ETH-Spin-offs 4Quant entwickeln intelligente<br>Analysealgorithmen, um grosse Datenmengen von PET/CT-<br>Bildern (Positronen-Emissions-Tomografie/Computertomo-<br>grafie) auszuwerten. <br>Besonderen Spass machte Lung Stage am Swiss Medtech Day<br>– und gewann den Science-Slam."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[9]=["images/kugel/09_NUK_e.jpg",
		"Unsere Studie zur Somatostatin-Rezeptor-PET/CT mit <br> Antagonisten errang internationale Beachtung. Die Resultate <br> wurden zweimal im Journal of Nuclear Medicine, der <br> wichtigsten nuklearmedizinischen Zeitschrift, publiziert."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[10]=["images/kugel/10_DINR_CF_e.jpg",
		"Dr. Christian Federau, Oberarzt der Neuroradiologie, erhielt<br>einen AMBIZIONE-Grant des SNF zur Erforschung der<br>Hirndurchblutung mit der kontrastmittelfreien, sogenannten<br>IVIM-Methode. Er wurde zudem für seine Publikation (in Radio-<br>logy) zur zeitlichen Evolution von ischämischen Hirnläsionen<br>mit dem Peter Huber Preis 2017 der Schweizerischen<br>Gesellschaft für Neuroradiologie ausgezeichnet. "
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		
		
		tooltips[11]=["images/kugel/11_CTD_e.jpg",
		"Als Core Center einer europäischen Multicenterstudie bei <br> arterieller Hypertonie haben wir erste Ergebnisse im European <br> Journal of Cardiology publiziert. "
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[12]=["images/kugel/12_SRYang_e.jpg",
		"Unsere Assistenzärztin Dr. Schu-Ren Yang hat den besten <br> Notendurchschnitt aller Prüflinge der Facharztprüfung <br> erzielt und erhält den «Prüfungspreis summa cum laude» <br> der Schweizerischen Gesellschaft für Radiologie."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[13]=["images/kugel/13_RadPhysik_Ventilation.gif",
		"Orso Pusterla, Doktorand der Radiologischen Physik, hat von <br> der International Society for Magnetic Resonance in <br> Medicine einen «Summa Cum Laude»-Award für seinen <br> Beitrag zur quantitativen Lungenbildgebung mittels MRT bei<br>Kindern mit Zystischer Fibrose erhalten. Mittels eines <br> Lungenmodells entwickelte er quantitative 3D-Karten zur <br> Visualisierung der Ventilation."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		

		tooltips[14]=["images/kugel/14_RadChem_e.jpg",
		"1000. Patient: Anfang November wurde von der Radio-<br>pharmazeutischen Chemie 68Ga-DOTATOC für den<br>1000. Patienten im Rahmen der neuroendokrinen Tumor-<br>diagnostik angefertigt. Wir sind sehr stolz, schweizweit<br>die ersten Anbieter des PET-Tracers gewesen zu sein<br>und mit unserem Produkt einen Beitrag zu einer besseren<br>Patientenversorgung zu leisten. "
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		
		
		tooltips[91]=["images/kugel/Flocke1_3D_e.jpg",
		"Die Radiological Society of North America (RSNA) nahm <br> zahlreiche unserer Beiträge für den weltgrössten Radio-<br>logiekongress an. Besonders erfreulich ist, dass neben 10 <br> wissenschaftlichen Beiträgen auch 9 Refresherkurse aus <br> Basel kommen. Diese Fortbildungsveranstaltungen <br> widmen sich vornehmlich dem diesjährigen Schwerpunkt-<br>thema des maschinellen Lernens. Das 3D Print Lab des <br> USB wurde von der RSNA als eine der Institutionen <br>ausgewählt, die ihre Erfahrungen mit dem 3D-Druck<br>vorstellen konnten."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]		
		
		tooltips[92]=["images/kugel/Flocke2_CTD ESCR_e.png",
		"Prof. Jens Bremerich, Leiter der Kardialen und Thorakalen <br> Radiologie, wurde zum Präsidenten der European Society of <br> Cardiovascular Radiology gewählt."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]

		tooltips[93]=["images/kugel/Flocke3_IP1.jpg",
		"Unsere beiden praxisorientierten Wahlprojekte zur Bild-<br>gebung haben gemäss der Evaluation des Studiendekanats<br>den 1. und 3. Platz der Projekte des 3. Bachelors (im<br>Studienjahr 2016/17) belegt. Die Studierenden beurteilen<br>«Praxisnahe Einblicke in die klinische Bildgebung (Radio-<br>logie und Nuklearmedizin)» indes nicht zum ersten Mal<br>so positiv.  Das früher nur einmal angebotene Projekt erreichte<br>schon im Studienjahr 2014/15 den 1. Platz."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]	

		tooltips[94]=["images/kugel/Flocke4_BD_e.jpg",
		"Warten müssen sie nicht – die Patientinnen und Patienten des<br>Zentrums für Bilddiagnostik, unserer Aussenstelle am Bahnhof SBB.<br>Auch 2017 waren trotz steigender Untersuchungszahlen<br>Termine am Folgetag möglich und Wartezeiten vor Ort eine Selten-<br>heit. Wer sich hier trotzdem setzte, konnte sich am frischen<br>Interieur mit Weitblick erfreuen."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]	

		tooltips[95]=["images/kugel/Flocke5_DINR_e.png",
		"Die Hörrinde ist individuell sehr variabel, mit Grössen-<br>unterschieden bis zu 150 Prozent. Dass musikalische Men-<br>schen mehrere Hörwindungen mit erweiterten Funk-<br>tionen besitzen, zeigt eine Arbeit der Forschungsgruppe von <br> PD Dr. Maria Blatow, die 2017 in der renommierten<br>Zeitschrift Brain Structure and Function veröffentlicht wurde."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]	
		
		tooltips[96]=["images/kugel/Flocke6_DINR_e.jpg",
		"Wie PD Dr. Andrea Bink (Neuroradiologie) 2017 publizierte,<br>können automatische 2D-Messungen zur Auswertung für<br>klinische Studien im präoperativen Setting benutzt werden –<br>vgl. die automatische Segmentierung eines Tumors in Ödem (grün),<br> Nekrose (rot), Kontrastmittel aufnehmendes Gewebe (gelb)<br>und nicht Kontrastmittel aufnehmendes Gewebe (blau)."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]	

		tooltips[99]=["images/kugel/bonus.png",
		"Welche Pathologie zeigt sich hier in Form<br>eines Rentiergeweihs bzw. einer Blume?<br>Die ersten drei Personen, die uns (radiologie@usb.ch)<br>die richtige Antwort auf dieses Bilder-, Pardon,<br>Bildgebungsrätsel mitteilen, erhalten eine kleine<br>Aufmerksamkeit."
		,{background:"#f0e4cc", color:"white", opacity: 0.9}]	
		
		
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips
	//***** NO NEED TO EDIT BEYOND HERE


	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")