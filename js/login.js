$(document).ready(function() {

    $("#signin").click(function(event) {
        event.preventDefault();
        login();
    }); 
});

// This is used for making ajax call for login
function login(){

    var emailVal = $('#email').val();
    var fNameVal = $('#password').val();

    if(validate()){
        alert("validated");
    }  
}

// This is used for hiding the error tag after giving the input
function hideLoginErr(){
    $('#loginErr').hide();
}
