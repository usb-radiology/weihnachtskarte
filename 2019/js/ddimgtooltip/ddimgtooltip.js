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

        tooltips[1]=["pic/01 Wir freuen.jpg",
		"Wir freuen uns über den SIWF AWARD, der uns vom<br>Schweizerischen Institut für ärztliche\
		Weiter- und<br>Fortbildung (SIWF) verliehen wurde.<br>Erst sechs von schweizweit über 1‘000\
		Weiterbildungs-<br>teams erhielten bisher die Auszeichnung, die für<br>besonderes Engagement\
		und Kompetenz in der ärztlichen<br>Weiterbildung vergeben wird."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[2]=["pic/02 Die schweizweit.jpg",
		"Die schweizweit ersten leberspezifischen Therapien mit<br>Holmium-166-Mikrospheren wurden\
		von den Abteilungen<br>für interventionelle Radiologie und für Nuklearmedizin<br>erfolgreich\
		bei Patientinnen und Patienten mit Lebertumoren<br>durchgeführt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]

		tooltips[3]=["pic/03 Dr David Winkel.jpg",
		"Dr. David Winkel, Assistenzarzt der Radiologie, wurde<br>mit dem Young Investigator Award\
		der Schweizerischen<br>Gesellschaft für Radiologie ausgezeichnet.<br>Er erhielt den Preis für\
		seine wissenschaftlichen Arbeiten<br>zur abdominellen Bildgebung und zur Anwendung der<br>\
		künstlichen Intelligenz in der Radiologie."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[4]=["pic/04 Das Tumorzentrum.jpg",
		"Das Tumorzentrum für Neuroendokrine- und Endokrine Tumore<br>wurde dank wesentlichem Beitrag\
		der Nuklearmedizin von der <br>Europäischen Gesellschaft für Neuroendokrine Tumore erfolgreich<br>\
		als Center of Excellence auditiert und von der deutschen Krebs-<br>gesellschaft als Schwerpunkt\
		zertifiziert."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[5]=["pic/05 Wir haben es.jpg",
		"Wir haben es aufs März-Cover geschafft!<br>Unsere Forschung zur Verbesserung der Diagnostik\
		von<br>Prostatakrebs mittels der MRT (unter Kombination von<br>GRASP-Sequenz, Diffusions- und\
		Perfusionsbildern)<br>wurde in der im Fachgebiet bedeutendsten Zeitschrift<br>«Radiology» publiziert."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		tooltips[6]=["pic/06 Die finalen.jpg",
		"Die finalen Resultate unserer prospektiven 177-Lu-PP-F11N-first<br>in man-Studie konnten im\
		«Journal of Nuclear Medicine», dem am<br>höchsten gerankten nuklearmedizinischen Journal\
		publiziert werden. "
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		tooltips[7]=["pic/07 Auch 2019.jpg",
		"Auch 2019 konnten wir über 20 Vorträge und Poster zur weltweit<br>bedeutendsten, von der\
		amerikanischen Radiologiegesellschaft<br>veranstalteten Fachtagung beisteuern. Besonders\
		erfreulich ist es,<br>dass die Beiträge überwiegend von unseren Assistenzärztinnen<br>und -ärzten\
		stammen.<br>Auch am Kongress der European Society of Radiology waren unsere<br>Radiologinnen\
		und Radiologen mit 15 Beiträgen gut vertreten.<br>Breit rezipiert wurde insbesondere der\
		Vortrag zum 3D-Druck von<br>Dr. Philipp Brantner, Kaderarzt und Co-Leiter des 3D-Print Lab."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		tooltips[8]=["pic/08 Zwei Forschungsprojekte.jpg",
		"Zwei Forschungsprojekte der Abteilungen für Nuklearmedizin<br>und für radiopharmazeutische\
        Chemie wurden während der<br>Highlight Lecture am amerikanischen Nuklearmedizin-Kongress<br>\
        (SNMMI) vorgestellt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		

		tooltips[9]=["pic/09 Die Abteilung.jpg",
		"Die Abteilung für radiopharmazeutische Chemie wurde<br>internationale Kooperationspartnerin\
        in dem mit 690'843 €<br>geförderten TECANT-Projektzu neuen 99mTc-markierten<br>Somatostatin-\
        Rezeptorantagonisten.<br>Es ist eines von 25 EU-Forschungsprojekten zur ERAPerMed<br>\
        personalisierten Medizin (im ERA-NET/Horizon 2020).<br>Das Kick-off-Meeting des\
        Konsortiums fand mit<br>Prof. Melpomeni Fani und Dr. Rosalba Mansi als Vertreterinnen<br>des\
        USB statt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]

		tooltips[10]=["pic/10 Alle Studierenden.jpg",
		"Alle Studierenden des Bildungsgangs 2016 haben erfolgreich ihre<br>Ausbildung zur dipl.\
        Radiologiefachperson HF abgeschlossen.<br>\
        Wir gratulieren ihnen herzlich und wünschen ihnen viel Erfolg<br>im Berufsleben."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		tooltips[11]=["pic/11 Die Zusammenarbeit.jpg",
		"Die Zusammenarbeit von Radiopharmazeutischer Chemie und<br>Nuklearmedizin bei der Entwicklung\
        neuer Radiopharmazeutika<br>zur Behandlung von Darmkrebs wurde von der Universität Basel<br>\
        (Nachwuchsförderung klinische Forschung) mit Fördermitteln<br>von 80'000 CHF ausgezeichnet.<br>\
        <br>Stipendiat ist Dr. Guillaume Nicolas (Nuklearmedizin) für seine<br>Proof-of-Concept-Studie\
        im Rahmen eines von Prof. Melpomeni<br>Fani (PI; Radiopharmazeutische Chemie) initiierten\
        Projekts."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[12]=["pic/12 Prof Dr Marios Psychogios.jpg",
		"Prof. Dr. Marios Psychogios wurde neuer Professor für<br>Neuroradiologie und Leiter der\
        Abteilung für diagnostische<br>und interventionelle Neuroradiologie der Klinik für Radiologie<br>\
        und Nuklearmedizin."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[13]=["pic/13 Um medizinische Bilder.jpg",
		"Um medizinische Bilder im DICOM-Format verteilen<br>und weiterleiten zu können, hat das\
		Forschungsteam um<br>Dr. Kai Tobias Block und Joshy Cyriac (wissenschaftliche<br>Mitarbeiter\
		der Radiologie) eine flexible<br>DICOM-Routing-Lösung entwickelt.<br><br>Der Open Source-Router\
		Hermes überzeugt durch eine<br>sehr benutzerfreundliche Weboberfläche und umfangreiche<br>\
		Überwachungsoptionen und hat sich bereits in der Praxis<br>bewährt."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[14]=["pic/14 Dr Philipp Brantner.jpg",
		"Dr. Philipp Brantner, Kaderarzt der Radiologie und Co-Leiter<br>des 3D-Print Lab wurde als\
        Editor von der renommierten<br>Fachzeitschrift «3D Printing in Medicine» aufgenommen."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[15]=["pic/15 Unsere Neuroradiologen.jpg",
		"Unsere Neuroradiologen konnten das WEB-Embolisationssystem<br>erfolgreich und erstmals in\
        Basel zur Embolisation eines nicht<br>rupturierten MCA-Bifurkationsaneurysmas einsetzen.<br>\
        Die neue Therapie ermöglicht die Behandlung von breitbasigen<br>Aneurysmen ohne die Nutzung\
        eines Stents und die damit<br>erforderliche Gerinnungshemmung."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[16]=["pic/16 Das Aneurysma.jpg",
		"Das Aneurysma des Stürmers Ricky van Wolfswinkel konnte<br>erfolgreich von uns behandelt\
        werden.<br><br>Nachdem der FCB dies auf Instagram gepostet hatte, waren Echo und<br>Interesse an\
        Aneurysmen sowie deren Behandlung gross – in der NZZ<br>ebenso wie auf Telebasel und in der\
        internationalen Sportpresse.<br>Wir wünschen unserem flinken Patienten weiterhin alles Gute."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[17]=["pic/17 Das Forschungsteam.jpg",
		"Das Forschungsteam um Dr. Bram Stieltjes entwickelte einen<br>Algorithmus, der mittels Deep\
		Learning distale Radialfrakturen<br>in Röntgenaufnahmen des Handgelenks automatisch erkennt<br>\
		und klassifiziert."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[20]=["pic/18 Der erste klinische.jpg",
		"Der erste klinische Einsatz eines Derivo mini am Menschen<br>im Universitätsspital Basel war\
        erfolgreich. Mit dem neuartigen<br>endovaskulären Implantat konnten unsere Neuroradiologen\
        ein<br>nicht rupturiertes A1-Aneurysma therapieren und den Patient<br>am zweiten Tag symptomfrei\
        entlassen. "
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[19]=["pic/19 Dr Balazs Krisztian Kovacs.jpg",
		"Dr. Balázs Krisztián Kovács, Kaderarzt der muskuloskelettalen<br>Radiologie, erhielt am\
        Jahreskongress der Schweizerischen<br>Gesellschaft für Radiologie den diesjährigen Research\
        Prize<br>der Swiss Society of Skeletal Radiology. Er wurde ausgezeichnet<br>für eine\
        Langzeitstudie zur MR-Morphologie von Kollagen-<br>Meniskusimplantaten des Kniegelenks nach\
        Unfällen."
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		tooltips[18]=["pic/",
		"Rätsel"
		,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[21]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[22]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[23]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[24]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[25]=["pic/",
		// ""
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[26]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]		
		
		// tooltips[88]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		
		// tooltips[99]=["pic/",
		// ,{background:"#f0e4cc", color:"white", opacity: 0.855}]
		

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