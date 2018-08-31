/**
 * LED Vorwiderstands-Rechner
 */

"use strict";

window.berechneVorwiderstand = function() {
	var U_ges = document.querySelector("input[name=U_ges]").value;
	var U_LED = document.querySelector("input[name=U_LED]").value;
	var I_LED = document.querySelector("input[name=I_LED]").value / 1000;
	
	var U_weg = U_ges - U_LED;
	console.log("U_weg = "+U_weg);
	
	var R_VorLED = U_weg / I_LED;
	console.log("R_VorLED = "+R_VorLED);
	document.querySelector("input[name=R_VorLED]").value = Math.ceil(R_VorLED);
};

window.onload = function() {
	document.querySelector("input[name=U_ges]").addEventListener("change", window.berechneVorwiderstand);
	document.querySelector("input[name=U_LED]").addEventListener("change", window.berechneVorwiderstand);
	document.querySelector("input[name=I_LED]").addEventListener("change", window.berechneVorwiderstand);
	window.berechneVorwiderstand();
};
