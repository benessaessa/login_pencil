function togglePasswordFieldClicked() {

	var passwordField = document.getElementById('passwordField');
	var value = passwordField.value;

	if(passwordField.type == 'password') {
        passwordField.type = 'text';
	}
	else {
		passwordField.type = 'password';
	}
	
	passwordField.value = value;

}
function togglePassword() {

	var passwordField = document.getElementById('passwordField2');
	var value = passwordField.value;

	if(passwordField.type == 'password') {
        passwordField.type = 'text';
	}
	else {
		passwordField.type = 'password';
	}
	
	passwordField.value = value;

}