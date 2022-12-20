

export function validSignup(){
    console.log("in valid")
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var Lpassword = document.getElementById('Lpassword').value;
    var Lemail = document.getElementById('Lemail').value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /^[A-Za-z. ]{3,30}$/ ;                                 // Javascript reGex for Name validation

    if (name == "" || !regName.test(name)) {
        alert("Please enter your name properly.");
        // name.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        alert("Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }
    if (Lemail == "" || !regEmail.test(Lemail)) {
        alert("Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }
    if(phone.length != 10){
        alert(" Enter valid Phone no");
        // password.focus();
        return false;
    }
    if (password == "") {
        alert("Please enter your password");
        // password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        // password.focus();
        return false;
    }
    
    if(password != repassword){
        alert("Password does not match!");
        // password.focus();
        // repassword.focus();
        return false;
    }
    if (Lpassword == "") {
        alert("Please enter your password");
        // password.focus();
        return false;
    }

    if(Lpassword.length <6){
        alert("Password should be atleast 6 character long");
        // password.focus();
        return false;
    }
    return true;
}

export function validLogin(){
    console.log("in valid")
    
    var Lpassword = document.getElementById('Lpassword').value;
    var Lemail = document.getElementById('Lemail').value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /^[A-Za-z. ]{3,30}$/ ;                                 // Javascript reGex for Name validation

  
    if (Lemail == "" || !regEmail.test(Lemail)) {
        alert("Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }
   
    if (Lpassword == "") {
        alert("Please enter your password");
        // password.focus();
        return false;
    }

    if(Lpassword.length <6){
        alert("Password should be atleast 6 character long");
        // password.focus();
        return false;
    }
    return true;
}

export function validEnquiry(){
    console.log("in valid")
  
    var Eemail = document.getElementById('Eemail').value;
    var Ephone = document.getElementById('Ephone').value;
    var Etext = document.getElementById('Etext').value;
    
   


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
            

  
     
    if (Eemail == "" || !regEmail.test(Eemail)) {
        alert("Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }
   
    if(Ephone.length != 10){
        alert(" Enter valid Phone no");
        // password.focus();
        return false;
    }
    if (Etext == "") {
        alert("Please enter a valid message address.");
        // email.focus();
        return false;
    }
    
    return true;
}