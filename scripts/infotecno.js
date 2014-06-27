
function validateLogin() {
	
	control = document.getElementById("control");
	pswd = document.getElementById("pswd");
	
	if(control.value == "" || pswd.value == "") {
		return false;
	} else {
		return true;
	}
	
}

function activateButton() {
	
	control = document.getElementById("control");
	pswd = document.getElementById("pswd");
	button = document.getElementById("login");
	
	if(control.value != "" && pswd.value != "") {
		button.disabled = false;
		//alert("");
	}
	
}
