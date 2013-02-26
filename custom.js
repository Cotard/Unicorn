window.onload = function(){
	var my = "my.js";
	var ie = "ie.js";
		
	var isIE = false//@cc_on || true
		
	var script = document.createElement("SCRIPT");
	script.type = "text/javascript";
	script.src = isIE ? ie : my;
		
	document.body.appendChild(script);		
}
