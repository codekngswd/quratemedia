/*
Author: LeQuan Ly, Asha Sheikh
Copyright: codekngswd 2018, QurateMedia 2018

This JavaScipt File is responsible for the Register Modal functionality.
*/

function showRegisterPopup() {
	var registerContainer = document.getElementById('registerContainer');
	
	registerContainer.style.display = "block";
}

// Close when user clicks outside of Modal
window.onclick = function(event) {
	if (event.target == registerContainer) {
		registerContainer.style.display = "none";
	}
}