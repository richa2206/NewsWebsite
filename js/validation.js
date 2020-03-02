// This is used for validating the sigin form
function validate(){
    console.log("3....");
    
    var password = $('#password').val();
    var emailVal = $('#email').val();
    console.log(emailVal);
   
    validateEmail(emailVal);
    validatePassword(password);
}

// check for password
function validatePassword(password) {
    
    var error = "";
    if(!isEmpty("Password", password)){
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password!=""){
        
        if(password.match(passw)) { 
            // return true;
        } else{ 
            $('#loginErr').show();
            var error = 'Wrong password ...!  it should contain 6 to 20 characters which contain '+
            'at least one numeric digit, one uppercase and one lowercase letter';
            $('#loginErr').text(error);
        }
    }
}

// chek for email
function validateEmail(emailVal){

    if(!isEmpty("email", emailVal)){
        // return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailVal!=""){
        if (!reg.test(emailVal)) {
            $('#loginErr').show();
            $('#loginErr').text("Please provide valid email address");
        }
    }
}

// check for empty
function isEmpty(field, data){
    var error = "";
    if (data === ''|| data === null || data === undefined) {
        error = "You didn't enter "+field+".";
        change_placeholder_color('.email', 'red');
        if(field=="email"){
            change_placeholder_color('.email', 'red');
            $('#email').attr("placeholder",error);
        }else if(field=="Password"){
            console.log("4......!");
            $('#password').attr("placeholder",error);
        }
    } 
}

// This is used to set placeholder color
function change_placeholder_color(target_class, color_choice) {
    $("body").append("<style>" + target_class + "::placeholder{color:" +  color_choice + "}</style>")
}