/**
 * LED Vorwiderstands-Rechner
 */
window.berechneVorwiderstand = function() {
	U_ges = document.querySelector("input[name=U_ges]").value;
	U_LED = document.querySelector("input[name=U_LED]").value;
	I_LED = document.querySelector("input[name=I_LED]").value / 1000;
	
	U_weg = U_ges - U_LED;
	console.log("U_weg = "+U_weg);
	
	R_VorLED = U_weg / I_LED;
	console.log("R_VorLED = "+R_VorLED);
	document.querySelector("input[name=R_VorLED]").value = Math.ceil(R_VorLED);
};

window.onload = function() {
	document.querySelector("input[name=U_ges]").addEventListener("change", window.berechneVorwiderstand);
	document.querySelector("input[name=U_LED]").addEventListener("change", window.berechneVorwiderstand);
	document.querySelector("input[name=I_LED]").addEventListener("change", window.berechneVorwiderstand);
	window.berechneVorwiderstand();
};
