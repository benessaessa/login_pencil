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
$(".emptyInput").on("click",function(evt){
	let inputField = $(this).prev("input");
	inputField.val("");
	$(this).addClass("d-none")
	console.log(inputField);
});

$("input").on("keyup",function(){
	console.log("done")
	if($(this).val()=="") $(this).next(".emptyInput").addClass("d-none")
	else $(this).next(".emptyInput").removeClass("d-none")
})
