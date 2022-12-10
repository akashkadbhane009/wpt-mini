
function validSignup(){
    var name =
        document.forms.SignupForm.Name.value;
    var email =
        document.forms.SignupForm.EMail.value;
    var password =
        document.forms.SignupForm.Password.value;
    var repassword =
        document.forms.SignupForm.rePassword.value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;
    }
    
    if(password != repassword){
        alert("Password does not match!");
        password.focus();
        repassword.focus();
        return false;
    }
    return true;
}

