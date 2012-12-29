enyo.kind({
	name: "About", 
	kind: "onyx.Popup", 
	classes: "onyx-light", 
	centered: true, 
	floating: true, 
	scrim: true, 
	style: "color:black;margin-bottom:216px;",
	components: [
		{kind:"enyo.Image", src:"icon.png", style:"position: absolute; left:-20px;top:-20px;"},
		{content: "Treinen", allowHtml: true, classes:"head"},
		{content: "(com.equusquagga.treinen) Versie: 0.9.1", allowHtml: true, classes:"version"},
		{content: "Een foto applicatie met de NS treinen die in Nederland rijden of hebben gereden. Speciaal voor Alex gemaakt door Papa.", allowHtml: true, classes:"aboutinfo"},
		{kind:"enyo.Image", src:"assets/eqlogo.png", style:"position: absolute; right:-40px;bottom:-40px;"}
	]
});