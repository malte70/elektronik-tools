/**
 * README.md und LICENCE darstellen
 */

"use strict";

window.viewFile = function(name, id) {
	var request = new XMLHttpRequest();
	request.open("GET", name);
	request.addEventListener("load", function(event) {
		if (request.status >= 200 && request.status < 300) {
			if (name.substring(name.length-3, name.length) == ".md") {
				var converter = new showdown.Converter();
				converter.setOption("noHeaderId",           true);
				converter.setOption("headerLevelStart",     4);
				converter.setOption("openLinksInNewWindow", true);
				
				var md = request.responseText;
				var html = converter.makeHtml(md);
				
			} else {
				html = request.responseText;
			}
			document.getElementById(id).innerHTML = html;
			
		} else {
			console.warn(request.statusText, request.responseText);
			
		}
	});
	request.send();
};

window.onload = function() {
	window.viewFile("README.md", "readme_content");
	window.viewFile("LICENSE",   "license_content");
};
