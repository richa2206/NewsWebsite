$(document).ready(function() {

    $("#signin").click(function(event) {
        console.log("1....");
        event.preventDefault();
        login();
    }); 
});

// This is used for making ajax call for registration
function login(){

    var emailVal = $('#email').val();
    var fNameVal = $('#password').val();

    if(validate()){
        console.log("2....");

        alert("validated");

       
    }  
}

// This is used fir hiding the error tag after giving the input
function hideLoginErr(){
    $('#loginErr').hide();
}
