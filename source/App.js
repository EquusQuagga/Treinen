enyo.kind({
	name: "App",
	style:"width:1024px;height:740px;position:relative;",
	components: [
		{name: "wapper",
		kind: "Panels",
		classes: "panels enyo-unselectable",
		arrangerKind: "CarouselArranger",
		wrap: false,
		style:"width:1024px;height:740px;",
		index:1,
		onTransitionFinish: "doFinish",
		components: [
			{name: "dummydiesel", naam:"Nedtrain 707", aantal:6, actief:1, components: [
				{name: "dummyfotodiesel", kind: "enyo.Image", src: "assets/treinen/nedtrain_707.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "treinen", naam:"Treinen", aantal:1, actief:1, components: [
				{name: "fototreinen", kind: "enyo.Image", src: "assets/treinen/treinen_rij.jpg", classes: "foto"}
			]},
			{name: "s2000", naam:"Serie 2000", aantal:3, actief:1, components: [
				{name: "fotos2000", kind: "enyo.Image", src: "assets/treinen/serie_2000.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "blokkendoos", naam:"De blokkendoos", aantal:2, actief:1, components: [
				{name: "fotoblokkendoos", kind: "enyo.Image", src: "assets/treinen/blokkendoos.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "treinstel", naam:"Treinstel 273", aantal:3, actief:1, components: [
				{name: "fototreinstel", kind: "enyo.Image", src: "assets/treinen/treinstel_273.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "blauweengel", naam:"De blauwe engel", aantal:2, actief:1, components: [
				{name: "fotoblauweengel", kind: "enyo.Image", src: "assets/treinen/blauweengel_186.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "s1000", naam:"Serie 1000", aantal:1, actief:1, components: [
				{name: "fotos1000", kind: "enyo.Image", src: "assets/treinen/serie_1000.jpg", classes: "foto"}
			]},
			{name: "s1100", naam:"Serie 1100", aantal:3, actief:1, components: [
				{name: "fotos1100", kind: "enyo.Image", src: "assets/treinen/serie_1100_oud.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "s1200", naam:"Serie 1200 - Locomotief 1254", aantal:3, actief:1, components: [
				{name: "fotos1200", kind: "enyo.Image", src: "assets/treinen/serie_1200_1254.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "s1300", naam:"Serie 1300", aantal:3, actief:1, components: [
				{name: "fotos1300", kind: "enyo.Image", src: "assets/treinen/serie_1300_1312.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "s1500", naam:"Serie 1500 - Locomotief 1501", aantal:2, actief:1, components: [
				{name: "fotos1500", kind: "enyo.Image", src: "assets/treinen/serie_1500_1501.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "hondekop", naam:"Hondekop", aantal:3, actief:1, components: [
				{name: "fotohondekop", kind: "enyo.Image", src: "assets/treinen/hondekop_766.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "s1600", naam:"Serie 1600", aantal:2, actief:1, components: [
				{name: "fotos1600", kind: "enyo.Image", src: "assets/treinen/serie_1600_3.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "planv", naam:"Plan-V", aantal:6, actief:1, components: [
				{name: "fotoplanv", kind: "enyo.Image", src: "assets/treinen/plan-t_plan-v.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "dubbel", naam:"Dubbeldekker", aantal:4, actief:1, components: [
				{name: "fotodubbel", kind: "enyo.Image", src: "assets/treinen/dubbeldekker.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "sprinter", naam:"Sprinter", aantal:1, actief:1, components: [
				{name: "fotosprinter", kind: "enyo.Image", src: "assets/treinen/sprinter_2957.jpg", classes: "foto"}
			]},
			{name: "koploper", naam:"Koploper", aantal:7, actief:1, components: [
				{name: "fotokoploper", kind: "enyo.Image", src: "assets/treinen/koploper_4076.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "regiorunner", naam:"Regiorunner bij abbenes", aantal:4, actief:1, components: [
				{name: "fotoregiorunner", kind: "enyo.Image", src: "assets/treinen/regiorunner_abbenes.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "thalys", naam:"Thalys", aantal:4, actief:1, components: [
				{name: "fotothalys", kind: "enyo.Image", src: "assets/treinen/thalys_nieuw.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "fyra", naam:"Fyra", aantal:4, actief:1, components: [
				{name: "fotofyra", kind: "enyo.Image", src: "assets/treinen/fyra_sneeuw.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "railhopper", naam:"Railhopper", aantal:1, actief:1, link:"http://youtu.be/zMJhtaY6k30", components: [
				{name: "fotorailhopper", kind: "enyo.Image", src: "assets/treinen/railhopper_2101.jpg", classes: "foto"}
			]},
			{name: "diesel", naam:"Nedtrain 707", aantal:6, actief:1, components: [
				{name: "fotodiesel", kind: "enyo.Image", src: "assets/treinen/nedtrain_707.jpg", classes: "foto", ontap: "tapfoto"}
			]},
			{name: "dummytreinen", naam:"Treinen", aantal:1, actief:1, components: [
				{name: "dummyfototreinen", kind: "enyo.Image", src: "assets/treinen/treinen_rij.jpg", classes: "foto"}
			]}
		]},
        {kind: "Signals", onorientationchange: "orientationchange"},
		{content: "Naam", name: "naam", classes: "naam"},
		{content: "Naam", name: "schaduw", classes: "schaduw"},
		{name: "aantal", classes: "aantal", components:[
			{kind: "enyo.Image", src: "assets/dotactive.png", name: "dot1", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot2", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot3", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot4", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot5", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot6", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot7", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot8", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot9", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot10", classes: "dots"},
			{kind: "enyo.Image", src: "assets/dotghost.png", name: "dot11", classes: "dots"}
		]},
		//{kind: "onyx.IconButton", src: "assets/YouTube.png", style:"width:100px;height:100px;",ontap: "youtubeTap", classes: "links"},
		{name: "appMenu", kind: "onyx.appMenu", components: [
			{content: "About", ontap:"about"},
			{classes: "onyx-menu-divider"},
			{content: "License", ontap:"license"}
		]},
		{name: "AboutPop", kind: "About"},
		{name: "LicensePop", kind: "License"}
	],
	about: function(inSender, inEvent) {
		this.$.appMenu.hide();
		this.$.AboutPop.show();
	},
	license: function(inSender, inEvent) {
		this.$.appMenu.requestAppMenuHide();
		this.$.LicensePop.show();
	},
	rendered: function() {
		this.inherited(arguments);
	},
	resizeHandler: function() {
		this.inherited(arguments);
	},
	size: function() {
	},	
	orientationchange: function(inSender, inEvent) {
		if (inEvent.position==4)
		{
			PalmSystem.setWindowOrientation('right');
		}				
		if (inEvent.position==5)
		{
			PalmSystem.setWindowOrientation('left');
		}				
	},
	tapfoto: function(inSender, inEvent) {
		this.inherited(arguments);
		
		panel = inEvent.originator.getParent().name;
		aantal = inEvent.originator.getParent().aantal;
		actief = inEvent.originator.getParent().actief;
		naam = aantal;
		foto = "serie_2000_amerikaan.JPG";
		folder = "assets/treinen/";
		actiefnew = actief+1;
		

		switch(panel) {
			case "dummydiesel":
				if(actief==1){
					foto="diesel_2498.jpg";
					naam="Diesel 2498";
				}else if(actief==2){
					foto="diesel_2215.jpg";
					naam="Diesel 2215";
				}else if(actief==3){
					foto="diesel_647.jpg";
					naam="Diesel 647";
				}else if(actief==4){
					foto="sik_300.jpg";
					naam="SIK 300";
				}else if(actief==5){
					foto="strukton_300650.jpg";
					naam="Strukton 300650";
				}else{
					foto="nedtrain_707.jpg";
					naam="Nedtrain 707";
					actiefnew=1;
				}
				break;
			break;
			case "treinen":
			break;
			case "s2000":
				if(actief==1){
					foto="serie_2000_amerikaan.JPG";
					naam="Serie 2000 in Amerika";
				}else if(actief==2){
					foto="serie_2000_amerikaan_2.jpg";
					naam="Serie 2000 in Amerika";
				}else{
					foto="serie_2000.jpg";
					naam="Serie 2000";
					actiefnew=1;
				}
				break;
			case "blokkendoos":
				if(actief==1){
					foto="blokkendoos_jules_jaap.jpg";
					naam="De blokkendoor - Jules en Jaap";
				}else{
					foto="blokkendoos.jpg";
					naam="De blokkndoos";
					actiefnew=1;
				}
				break;
			case "treinstel":
				if(actief==1){
					foto="treinstel_281.jpg";
					naam="Treinstel 281";
				}else if(actief==2){
					foto="treinstel_226.jpg";
					naam="Treinstel 226";
				}else{
					foto="treinstel_273.jpg";
					naam="Treinstel 273";
					actiefnew=1;
				}
			break;
			case "blauweengel":
				if(actief==1){
					foto="de2_180.jpg";
					naam="DE2 180";
				}else{
					foto="blauweengel_186.jpg";
					naam="De blauwe engel";
					actiefnew=1;
				}
				break;
			case "s1000":
			break;
			case "s1100":
				if(actief==1){
					foto="serie_1100_1152.jpg";
					naam="Serie 1100 - Locomotief 1152";
				}else if(actief==2){
					foto="serie_1100_1145_1136.jpg";
					naam="Serie 1100 - Locomotief 1145 en 1136";
				}else{
					foto="serie_1100_oud.jpg";
					naam="Serie 1100";
					actiefnew=1;
				}
				break;
			case "s1200":
				if(actief==1){
					foto="serie_1200_1254_sneeuw.jpg";
					naam="Serie 1200 - Locomotief 1254";
				}else if(actief==2){
					foto="serie_1200_1300_1500.jpg";
					naam="Serie 1200, 1300 en 1500";
				}else{
					foto="serie_1200_1254.jpg";
					naam="Serie 1200 - Locomotief 1254";
					actiefnew=1;
				}
				break;
			case "s1300":
				if(actief==1){
					foto="serie_1300_1307_oud.jpg";
					naam="Serie 1300 - Locomotief 1307";
				}else if(actief==2){
					foto="serie_1300_sloop.jpg";
					naam="Serie 1300 - Op de sloop";
				}else{
					foto="serie_1300_1312.jpg";
					naam="Serie 1300 - Locomotief 1312";
					actiefnew=1;
				}
				break;
			case "s1500":
				if(actief==1){
					foto="serie_1500_1501b.jpg";
					naam="Serie 1500 - Locomotief 1501";
				}else{
					foto="serie_1500_1501.jpg";
					naam="Serie 1500 - Locomotief 1501";
					actiefnew=1;
				}
				break;
			case "hondekop":
				if(actief==1){
					foto="hondekop_769.jpg";
					naam="Hondekop";
				}else if(actief==2){
					foto="hondekop_planv.jpg";
					naam="Hondekop met een Plan-V";
				}else{
					foto="hondekop_766.jpg";
					naam="Hondekop";
					actiefnew=1;
				}
				break;
			case "s1600":
				if(actief==1){
					foto="serie_1600_1832.jpg";
					naam="Serie 1800 - Locomotief 1832";
				}else{
					foto="serie_1600_3.jpg";
					naam="Serie 1600";
					actiefnew=1;
				}
				break;
			case "planv":
				if(actief==1){
					foto="plan-t_sneeuw.jpg";
					naam="Plan-T";
				}else if(actief==2){
					foto="plan-t_514.jpg";
					naam="Plan-T";
				}else if(actief==3){
					foto="plan-t_512.jpg";
					naam="Plan-T";
				}else if(actief==4){
					foto="plan-v_419.jpg";
					naam="Plan-V";
				}else if(actief==5){
					foto="plan-v_hondekop_treinstel_273.jpg";
					naam="Plan-V met een Hondekop en Treinstel 273";
				}else{
					foto="plan-t_plan-v.jpg";
					naam="Plan-T en Plan-V";
					actiefnew=1;
				}
				break;
			case "dubbel":
				if(actief==1){
					foto="dubbeldekker_boven.jpg";
					naam="Dubbeldekker";
				}else if(actief==2){
					foto="dubbeldekker_sneeuw_voor.jpg";
					naam="Dubbeldekker";
				}else if(actief==3){
					foto="dubbeldekker_sneeuw_achter.jpg";
					naam="Dubbeldekker";
				}else{
					foto="dubbeldekker.jpg";
					naam="Dubbeldekker";
					actiefnew=1;
				}
				break;
			case "sprinter":
			break;
			case "koploper":
				if(actief==1){
					foto="koploper_schiphol.jpg";
					naam="Koploper bij Schiphol";
				}else if(actief==2){
					foto="koploper_4093_sneeuw.jpg";
					naam="Koploper";
				}else if(actief==3){
					foto="koploper_4205.jpg";
					naam="Koploper";
				}else if(actief==4){
					foto="koploper_4011_klm.jpg";
					naam="Koploper";
				}else if(actief==5){
					foto="koploper_open1.jpg";
					naam="Koploper met doorloopdeuren dicht";
				}else if(actief==6){
					foto="koploper_open2.jpg";
					naam="Koploper met doorloopdeuren open";
				}else{
					foto="koploper_4076.jpg";
					naam="Koploper";
					actiefnew=1;
				}
				break;
			case "regiorunner":
				if(actief==1){
					foto="regiorunner_8733.jpg";
					naam="Regiorunner";
				}else if(actief==2){
					foto="regiorunner.jpg";
					naam="Regiorunner met locomotief 1501";
				}else if(actief==3){
					foto="regiorunner_olympisch.jpg";
					naam="Regiorunner in Olympische kleuren";
				}else{
					foto="regiorunner_abbenes.jpg";
					naam="Regiorunner bij abbenes";
					actiefnew=1;
				}
				break;
			case "thalys":
				if(actief==1){
					foto="thalys_ice.jpg";
					naam="Thalys en de ICE";
				}else if(actief==2){
					foto="thalys.jpg";
					naam="Thalys. oud en nieuw";
				}else if(actief==3){
					foto="thalys_oud.jpg";
					naam="Thalys. het oude model";
				}else{
					foto="thalys_nieuw.jpg";
					naam="Thalys";
					actiefnew=1;
				}
				break;
			case "fyra":
				if(actief==1){
					foto="fyra_loc_sneeuw.jpg";
					naam="Fyra locomotief in het rood";
				}else if(actief==2){
					foto="fyra_dijk.jpg";
					naam="Fyra";
				}else if(actief==3){
					foto="fyra_loc_wit.jpg";
					naam="Fyra locomotief in het wit";
				}else{
					foto="fyra_sneeuw.jpg";
					naam="Fyra";
					actiefnew=1;
				}
				break;
			case "railhopper":
			break;
			case "diesel":
				if(actief==1){
					foto="diesel_2498.jpg";
					naam="Diesel 2498";
				}else if(actief==2){
					foto="diesel_2215.jpg";
					naam="Diesel 2215";
				}else if(actief==3){
					foto="diesel_647.jpg";
					naam="Diesel 647";
				}else if(actief==4){
					foto="sik_300.jpg";
					naam="SIK 300";
				}else if(actief==5){
					foto="strukton_300650.jpg";
					naam="Strukton 300650";
				}else{
					foto="nedtrain_707.jpg";
					naam="Nedtrain 707";
					actiefnew=1;
				}
				break;
			case "dummytreinen":
			break;
		}
		
		if (panel=="diesel")
		{
			this.$.dummyfotodiesel.setSrc(folder+foto);
			this.$.dummydiesel.naam = naam;//set naam into the active panel
			this.$.dummydiesel.actief = actiefnew;//set active foto into the panel
		}else if (panel=="dummydiesel")
		{	
			this.$.fotodiesel.setSrc(folder+foto);
			this.$.diesel.naam = naam;//set naam into the active panel
			this.$.diesel.actief = actiefnew;//set active foto into the panel
		}
		inEvent.originator.setSrc(folder+foto);
		this.$[panel].naam = naam;//set naam into the active panel
		this.$[panel].actief = actiefnew;//set active foto into the panel
		this.$.naam.setContent(naam);
		this.$.schaduw.setContent(naam);
		this.setDots(aantal,actiefnew);
	},
	doFinish: function(inSender, inEvent) {
		if(inEvent.originator.getActive().getName() == "dummydiesel"){
			this.$.wapper.setIndex(21);
		};
		if(inEvent.originator.getActive().getName() == "dummytreinen"){
			this.$.wapper.setIndex(1);
		};
		this.inherited(arguments);
		this.panel = inEvent.originator.getActive().naam;
		this.$.naam.setContent(this.panel);
		this.$.schaduw.setContent(this.panel);
		this.setDots(inEvent.originator.getActive().aantal,inEvent.originator.getActive().actief);

	},
	setDots: function(inCount, inActive){
		for(i=1;i<=11;i++){
			naam="dot"+i;
			if(i<=inCount){
				if(i==inActive){
					this.$[naam].setSrc("assets/dotactive.png");
					this.$[naam].setStyle("display:block");
				}else{
					this.$[naam].setStyle("display:block");
					this.$[naam].setSrc("assets/dotghost.png");
				}
			}else{
				// REMOVE UNUSED DOTS
					this.$[naam].setStyle("display:none");
			}
		
		}
	}
});

