function validateName() {
    var name = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    var l = name.value.length;
    if(l <= 3){
        nameError.style.display = "block";
        nameError.innerHTML = "Please Enter a valid name";
        nameError.style.color="red";
        return false;
    }
    else{
        nameError.style.display = "none";
        return true;
    }    
}

function validateEmail() {
    var email = document.getElementById("emailID").value;
    var emailError = document.getElementById("emailError");
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!regEx.test(email)){
        emailError.style.display="block";
        emailError.innerHTML= "Enter a valid Email ID";
        emailError.style.color="red";
        // console.log("Failed case");
       
        return false
    }
    else{
        // console.log("passed case");
        emailError.style.display = "none";
        return true; 
    }
}

function validateNumber(){
    var num = document.getElementById("phNumber").value;
    // console.log(num.length);
    var numError = document.getElementById("numError");
    const phregEx = /^[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9]{1,10}$/; 
    if(!phregEx.test(num) || num.length<10){
        // console.log("failed");
        numError.style.display="block";
        numError.innerHTML= "Enter a valid phone number";
        numError.style.color="red";
        return false;
    }
    else{
        // console.log("passed");
        numError.style.display = "none";
        return true; 
    }
}

function validateMessage(){
    var msg = document.getElementById("message").value;
    var msgError = document.getElementById("msgError");
    if(msg.length <= 3){
        // console.log("if");
        msgError.style.display="block";
        msgError.innerHTML= "Enter a valid message to be sent";
        msgError.style.color='red';
        return false;
    }
    else{
        // console.log("else");
        msgError.style.display = "none";
        return true;
    }
}

