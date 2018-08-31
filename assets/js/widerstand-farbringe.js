/**
 * Widerstand Farbringe
 */

"use strict";

window.berechneWiderstand = function() {
	var ring1 = document.querySelector("select[name=ring1]").value;
	var ring2 = document.querySelector("select[name=ring2]").value;
	var ring3 = document.querySelector("select[name=ring3]").value;
	var ring4 = document.querySelector("select[name=ring4]").value;
	var ring5 = document.querySelector("select[name=ring5]").value;
	ring1 = parseInt(ring1);
	ring2 = parseInt(ring2);
	ring3 = parseInt(ring3);
	ring4 = parseInt(ring4);
	ring5 = parseInt(ring5);
	
	var R = ring1 * 10;
	R += ring2;
	if (ring3 != -1)
		R = R*10 + ring3;
	R *= ring4;
	var tolerance = ring5;
	
	if (R > 1000000000) {
		var resistance = R/1000000000 + " GΩ";
		
	} else if (R > 1000000000) {
		var resistance = R/1000000 + " MΩ";
		
	} else if (R > 1000) {
		var resistance = R/1000 + " kΩ";
		
	} else {
		var resistance = R + " Ω";
	}
	
	console.log("R = " + R + "+- " + tolerance + "%");
	document.querySelector("input[name=R]").value = resistance;
	document.querySelector("input[name=tolerance]").value = tolerance;
};

window.onload = function() {
	document.querySelector("select[name=ring1]").addEventListener("change", window.berechneWiderstand);
	document.querySelector("select[name=ring2]").addEventListener("change", window.berechneWiderstand);
	document.querySelector("select[name=ring3]").addEventListener("change", window.berechneWiderstand);
	document.querySelector("select[name=ring4]").addEventListener("change", window.berechneWiderstand);
	document.querySelector("select[name=ring5]").addEventListener("change", window.berechneWiderstand);
	window.berechneWiderstand();
};
