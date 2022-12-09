// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// document.forms.[form name].(namw attr val).value
function valid() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
    var what =
        document.forms.RegForm.Subject.value;
    var password =
        document.forms.RegForm.Password.value;
    var Repassword =
        document.forms.RegForm.rePassword.value;

    var address =
        document.forms.RegForm.Address.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
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
    
    if(password == rePassword){
        alert("Password does not match!");
        password.focus();
        Repassword.focus();
        return false;

    }
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
    return true;
}
//form validation for username?
//form validation for password js?
// function validateForm(){
//     var pass1 = document.getElementsByName("password")[0].value;
//     var pass2 = document.getElementsByName("password2")[0].value;
//     if (pass1 === pass2) {
//         alert("Passwords Match");
//     } else {
//         alert("Passwords Do Not Match");
//     }
// }

// Enter First and Last Name
// <input type = "text" id = "name" /><br/>
// Enter Your Email Address
// <input type = "text" id = "email" /><br/>
// Please Enter a Username
// <input type = "text" id = "username" /><br/>
// Please Enter a Password
// <input type = "password" name = "password" /><br/>
// Enter Your Password Again
// <input type = "Password" name= "password2" /><br/>

// <button type = "button" id = "validate" onclick = "validateForm();">Validate Password</button>
// <button type = "button" id = "create" onclick = "submit()">Create Profile</button>

