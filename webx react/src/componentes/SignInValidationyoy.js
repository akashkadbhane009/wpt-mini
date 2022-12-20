function validateUsername() {
   var username = document.getElementById("username").value;
    if (username.trim().length == 0) {
        alert("Username Mandatory");
        //document.getElementById("unameerr").innerHTML = "Mandetory field";
        return false;
    }
    else {
        //document.getElementById("unameerr").innerHTML = "";
        return true;
    }
}

// validate password is empty or not
function validatePassword() {
    var pass = document.getElementById("password").value;
    if (pass.trim().length == 0) {
        alert("Password Mandatory");
        //document.getElementById("passerr").innerHTML = "Mandetory field";
        return false;
    }

    else {
        //document.getElementById("passerr").innerHTML = "";
        return true;
    }
}


//validate data
 export function validateSignIn() {
    var flag1 = validateUsername();
    var flag2 = validatePassword();

    if (flag1 && flag2) {
        return true;
    }
    else {
        return false;
    }
}
// export default validateSignIn;