/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

        tooltips[1]=["pic/Kugel/FFFFFF-0.0.png",
		"Ein neues Radiopharmazeutikum (177-Lu-PPFF11N)<br>konnte dank erfolgreicher Kooperation mit dem<br>Paul Scherrer Institut an ein Pharmaunternehmen<br>lizenziert werden.<br>Damit ist es für mehr Patientinnen und Patienten<br>mit medullärem Schilddrüsenkarzinom zugänglich."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
        tooltips[2]=["pic/Kugel/02_Certificate Eurosafe USB_2018e.jpg",
		"Die Europäische Gesellschaft für Radiologie hat<br>die Anwendung des Strahlenschutzes an unserer Klinik<br>evaluiert und erneut mit der Höchstnote bewertet.<br>Die Auszeichnung anerkennt den hohen Standard,<br>den der Strahlenschutz bei uns hat."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]

        tooltips[3]=["pic/Kugel/03_Beitrag 1 RadChem WK2018e.jpg",
		"Unser neues radiopharmazeutisches GMP-Labor<br>(Good Manufacturing Practice) hat die Betriebs-<br>bewilligung der Swissmedic erhalten, dies nach erfolg-<br>reicher Inspektion durch das BAG und das regionale<br>Heilmittelinspektorat.<br>Damit können wir komplexe EU-GMP-pflichtige<br>Radiopharmazeutika und klinische Prüfpräparate<br>für die Bildgebung und die Therapie unserer Patienten<br>direkt vor Ort herstellen – z. B. 68-Ga-DOTATOC<br>und 177-Lu-DOTATOC."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
        tooltips[4]=["pic/Kugel/04_KVP Preisverleihunge.jpg",
		"Verbesserung beginnt mit guten Ideen.<br>Diese hatten Dr. Noemi Schmidt und Nadja Zumbrunn,<br>Assistenzärztin bzw. Radiologiefachfrau. Sie optimierten<br>die Kommunikation mit der Notfallstation – ermög-<br>lichten so die schnellere Befundung und Behandlung<br>von akut eingestuften Notfallpatienten sowie die frühere<br>Entlassung weniger dringlicher Fälle.<br>Die beiden erhielten den KVP-Preis (1. Platz) des USB."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
        tooltips[5]=["pic/Kugel/05_Prüfungspreise.jpg",
		"Zweimal summa, einmal magna für unsere Fachärzte:<br>3 von 8 Prüfungspreisen vergab die SGR, die Schweize- <br>rische Gesellschaft für Radiologie, 2018 an Assistenz- <br>ärzte des USB.<br>Für seine Leistungen an der 1. Teilprüfung 2018 hat<br>Dr. Ricardo Donners ein summa cum laude, erhalten.<br>Derselbe Preis ging an Dr. Pascal Klinger-Gratz für sein<br> Ergebnis der 2. Teilprüfung 2017. An dieser hat auch<br>Dr. Theo Demerath glänzend abgeschnitten und wurde<br>mit einem magna cum laude geehrt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
        tooltips[6]=["pic/Kugel/06_Press release NUKe.jpg",
		"Der Bericht des Journal of Nuclear Medicine<br>über unsere Publikation einer neuen Bildgebung zur<br>verbesserten Darstellung neuroendokriner Tumoren<br>hat reges Medieninteresse geweckt, z. B. bei Science<br>Daily, R&D Magazine, News-Medical.net, Medical<br>Xpress, DOTmed, Aunt Minnie, Facebook und Twitter."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
        tooltips[7]=["pic/Kugel/07_Gehweiler Preis2e.jpg",
		"Unser Assistenzarzt Dr. Julian Gehweiler erhielt am<br>Kongress der Radiological Society of North America<br>(RSNA) den mit 3000 Dollar dotierten Preis für das<br>beste neuroradiologische Abstract.<br>Er untersuchte Gadoliniumakkumulationen anhand von<br>knapp 12‘000 Schädel-MRTs und stellte fest, dass die<br>Ablagerungen verbreiteter zu sein scheinen als ange-<br>nommen. Beide klinisch eingesetzten gadoliniumhaltigen<br>Kontrastmittel scheinen zu Akkumulationen zu führen,<br>indes an unterschiedlichen Lokalisationen des Gehirns.<br>Der vom radiologischen Fachforum AuntMinnie zum<br>Abstract verfasste Bericht gewann den Preis für den<br>am häufigsten gelesenen Artikel zur MRI-Bericht-<br>erstattung am Kongress, den Roadie Award."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
        tooltips[8]=["pic/Kugel/08_Caobelli_Federicoe.jpg",
		"Dr. Federico Caobelli, Oberarzt der Nuklearmedizin,<br>hat am Jahreskongress der Schweizerischen Gesellschaft<br>für Nuklearmedizin (SGNM) den Best oral presentation<br>prize erhalten.<br>Er hatte eine Multizenterstudie präsentiert, die mit zwei<br>italienischen Institutionen durchgeführt wurde, und zeigte,<br>dass der untersuchte Parameter eine wichtige Rolle bei der<br>Bestimmung der Prognose der Patienten in Bezug auf<br>ein erhöhtes kardiovaskuläres Risiko spielt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		

        tooltips[9]=["pic/Kugel/09_bauman_grzegorze.jpg",
		"Dr. Grzegorz Bauman erhielt für seine Arbeit zur funktio- <br>nellen Lungenbildgebung den Andres-Giedion-Preis<br>der Schweizerischen Gesellschaft für Radiologie (SGR).<br>Der wissenschaftliche Mitarbeiter der radiologischen<br>Physik hat eine MR-Methode zur Messung der Lungen-<br>funktion bei Kindern mit zystischer Fibrose entwickelt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]

        tooltips[10]=["pic/Kugel/FFFFFF-0.0.png",
		"Am weltweit grössten Radiologiekongress (RSNA in<br>Chicago) konnten wir zahlreiche Beiträge präsentieren,<br>wurden als Erst-/Letztautoren zu 15 Vorträgen sowie zu<br>2 Moderationen und 4 Postern eingeladen.<br>Zudem boten unsere Wissenschaftler 2 Workshops (mit<br>insgesamt 10 Vorträgen) zu künstlicher Intelligenz und<br>maschinellem Lernen an.<br>Gleich 4, z. T. hochrangige, Preise gingen nach Basel<br>und sorgten für Medienecho."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
        tooltips[11]=["pic/Kugel/11_Winkel_David_2016e.jpg",
		"Eine Basler Studie konnte die Effektivität der künstlichen<br>Intelligenz zur Priorisierung akuter abdomineller Unter-<br>suchungen zeigen.<br>Der vom Assistenzarzt Dr. David Winkel analysierte<br>Deep-Learning-Algorithmus war in der Lage,<br>akute abdominelle Fälle in Computertomografien<br>mit einer Sensitivität von 93 Prozent sowie einer Spezi-<br>fität von 97 Prozent zu erkennen. Eine klinische An-<br>wendung könnte es ermöglichen, akute abdominelle Fälle<br>künftig sofort, zuverlässig und autonom als dringend<br>zu kennzeichnen."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[12]=["pic/Kugel/12_3d_kiefere.jpg",
		"Das Symposium on 3D Printing for Life Sciences 2018<br>stiess auf grosses Interesse: 140 Besucherinnen und<br>Besucher informierten sich über den Stand des 3D- <br>Drucks in den Life Sciences.<br>Technologien zur Realisierung von polymeren, kera-<br>mischen oder metallischen Druckerzeugnissen<br>oder zur Replikation komplexer biologischer Systeme<br>mit lebenden Zellen für die klinische Routine und die<br>Medizinprodukteindustrie waren vorherrschende The-<br>men des mit der Fachhochschule Nordwestschweiz<br>und BaselArea.swiss durchgeführten Symposions."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[13]=["pic/Kugel/13_Platinum_UniversityHospitalBasele.jpg",
		"Wir sind stolz darauf, dass unser Weiterbildungs-<br>programm für Assistenzärzte der Radiologie von der<br>Europäischen Gesellschaft für Radiologie mit der<br>besten Bewertung, dem Platinum Level of Excellence,<br>zertifiziert wurde."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[14]=["pic/Kugel/14_68Ga-exendin-4 PETCT Publikation EJNMMIe.jpg",
		"Die Resultate unserer prospektiven GLP-1R-«imaging»- <br>Studie konnten im renommierten «European Journal<br>of Nuclear Medicine and Molecular Imaging» publiziert<br>werden."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[15]=["pic/Kugel/15_Takese.jpg",
		"Top «10% rated scientific papers» – dazu zählt<br>die Cardiovascular and Interventional Radiological<br>Society of Europe (CIRSE) das Abstract<br>«Percutaneous radiological gastrostomy without naso-<br>gastral insufflation – description of a novel method».<br>Eingereicht hat es Dr. Martin Takes, Kaderarzt und<br>stv. Abteilungsleiter der interventionellen Radiologie."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[16]=["pic/Kugel/16_Highlight lecture NUK Studiene.jpg",
		"Drei Forschungsprojekte von Nuklearmedizin und<br>Radiopharmazie wurden an den Highlight Lectures<br>der SNMMI und der EANM (amerikanischer und euro-<br>päischer Kongress der Nuklearmedizin) hervorgehoben<br>und als wichtig beurteilt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[17]=["pic/Kugel/17_Kleintierkamerae.jpg",
		"Dank der Anschaffung der ersten Kleintier-PET-Kamera<br>in der Nordwestschweiz sind wir in der Lage, PET- bzw.<br>PET/CT-Untersuchungen von Kleintieren, z. B. von<br>Mäusen, durchzuführen.<br>Damit kann die Bioverteilung von neuen diagnostischen<br>Radiopharmazeutika im narkotisierten Tier sichtbar ge-<br>macht werden.<br>Dies ist ein wichtiger Beitrag, um weniger Tiere für Tier-<br>versuche einzusetzen."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[18]=["pic/Kugel/18_Hirschmann_Knie_mit_Lasere.jpg",
		"Die dosisreduzierte 3D-Computertomografie wurde<br>für periphere Gelenkuntersuchungen mit der Option auf<br>gewichtsbelastete Untersuchungen (im Stehen) etabliert."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[19]=["pic/Kugel/19_FaniMelpomeni2018e.jpg",
		"Der Universitätsrat hat Prof. Dr. Melpomeni Fani<br>(Leitung radiopharmazeutische Chemie, Forschung<br>und Lehre) zur klinischen Professorin für radiopharma-<br>zeutische Chemie gewählt.<br>Ihr wissenschaftlicher Fokus gilt der Entwicklung neuer<br>Radiopharmazeutika von hoher Spezifität und klinischer<br>Relevanz für therapeutische und diagnostische Anwen-<br>dungen in der Onkologie."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[20]=["pic/Kugel/20_IR Holsteiner Kellere.jpg",
		"Vom 6.–9. November konnten wir erfolgreich die inter- <br>disziplinären Basler Endokurse zusammen mit den<br>Kollegen der Angiologie und Gefässchirurgie anbieten.<br>Die gut besuchte Veranstaltung wurde als Basiskurs,<br>als Kurs für Embolisation und als Kurs für EVAR<br>(Endovascular Aortic Repair) angeboten und von den<br>Teilnehmerinnen und Teilnehmern erneut positiv beurteilt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[21]=["pic/Kugel/21_tillannae.jpg",
		"Venia docendi – wir gratulieren PD Dr. Tilman Schubert<br>und PD Dr. Anna Hirschmann zur Habilitation."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[22]=["pic/Kugel/FFFFFF-0.0.png",
		"Unsere Studierenden haben, vom Bildungszentrum<br>Gesundheit Basel-Stadt (BZG) initiiert, am nationalen<br>Tag der Radiologiefachpersonen ihr Projekt zur zukünf-<br>tigen Berufswelt und zum Generationenwandel präsen-<br>tiert.<br>Die Präsentationen und die Resultate der Diskussionen<br>zum Thema Digitalisierung und Automatisierung wurden<br>dem Berufsverband (SVMTRA) überreicht.<br>Ein herzliches Dankeschön an die Studierenden<br>des Bildungsgangs MTR 17 sowie an die Projektleitung<br>des BZG."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[23]=["pic/Kugel/23_csm_Simulation_Nijhuis_cd597f550de.jpg",
		"Für seine wissenschaftliche Arbeit hat Dr. Emil Nijhuis,<br>wissenschaftlicher Mitarbeiter der diagnostischen und<br>interventionellen Neuroradiologie, einen GPU-Grant<br>erhalten.<br>Die Auszeichnung in Form eines hochleistungsfähigen<br>Grafikprozessors wurde ihm von NVIDIA für seine For-<br>schung zur Vergleichbarkeit von neuronalen Netzwerken<br>sowie zu deren Beeinflussung durch Hirntumoren<br>zugesprochen"
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[24]=["pic/Kugel/24_Bretze.jpg",
		"Für ausserordentliche Leistungen: Hanna Bretz,<br>die im Rahmen ihres Studiums (BWL Gesundheits-<br>management) und unserer Kooperation mit der Dualen<br>Hochschule Baden Württemberg in der Klinik für<br>Radiologie und Nuklearmedizin sowie in der USB-<br>Tochter, dem Zentrum für Bilddiagnostik, angestellt<br>war, erhielt den mit 1000 Euro dotierten Preis der Stadt<br>Lörrach für ihre überdurchschnittliche Bachelorarbeit<br>(«Digitalisierung der Geschäftsprozesse eines mittel-<br>ständischen Radiologie-Instituts durch Konzeption<br>eines elektronischen Workflows von der Zuweisung<br>bis zum Befundversand»"
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[25]=["pic/Kugel/FFFFFF-0.0.png",
		""
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[26]=["pic/Kugel/26_Raprad Logoe.jpg",
		"Unseren Studierenden Bildinterpretation spielend ver-<br>mitteln: Die von Basler Radiologen und Dozenten<br>in Zusammenarbeit mit der Fachhochschule Nordwest-<br>schweiz entwickelte E-Learning-Plattform Raprad erhielt<br>den mit 5000 Franken dotierten Dozierendenpreis der<br>Fachschaft Medizin.<br>Raprad ähnelt einem Computergame und vermittelt Stu-<br>dierenden und Assistenzärzten das zur Befundung medi-<br>zinischer Bilder notwendige Wissen:<br>schnell, kompetent und mit hohem Spassfaktor."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		tooltips[88]=["pic/Kugel/88_Sockel_Brame.jpg",
		"Das Swiss Personalized Health Network (SPHN)<br>fördert unser multizentrisches Forschungsprojekt zur<br>Kalibrierung von CT-Geräten zur genaueren, textur-<br>basierten Quantifizierung.<br>„QA4IQI Quality Assessment for Interoperable<br>Quantitative CT-Imaging“ analysiert die Diversität von<br>CT-Rohdaten an Schweizer Kliniken anhand von<br>Texturphantomen. Durch Kalibrierung wird die<br>Quantifizierung von pathologisch relevanten Bio-<br>markern genauer und besser vergleichbar, was exaktere<br>Aussagen zu Diagnose, Therapieentscheid und Pro-<br>gnose ermöglicht. Gefördert werden QA4IQI und<br>zwei weitere Projekte unter Beteiligung der Radiologie<br>mit fast 500‘000 Franken."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[99]=["pic/Kugel/Raetsel_Blasenstein-in-Sternform-im-CT_e.jpg",
		"Auch ein computertomografisches Bild<br>kann weihnächtlich anmuten.<br><br>Bei welcher Pathologie haben unsere Radiologinnen<br>und Radiologen Sterne gesehen?<br>Die ersten drei Personen, die uns (radiologie@usb.ch)<br>die richtige Antwort auf dieses Bilder-, Pardon,<br>Bildgebungsrätsel mitteilen, erhalten eine kleine<br>Aufmerksamkeit."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		

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