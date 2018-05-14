/**
 * README.md und LICENCE darstellen
 */
window.viewFile = function(name, id) {
	var request = new XMLHttpRequest();
	request.open("GET", name);
	request.addEventListener("load", function(event) {
		if (request.status >= 200 && request.status < 300) {
			document.getElementById(id).innerHTML = request.responseText;
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
