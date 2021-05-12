
document.querySelector(".submit").addEventListener("click", validate);

function validate()
{

    var name_regex = /^[a-zA-Z]{1,30}$/;
var email_regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var phone_regex = /^\d{10}$/;
var regno_regex =  /^[0-9a-zA-Z]+$/;
    
        if (document.querySelector("#name").value.match(name_regex)){
        console.log(document.querySelector("#name").value);
    }
    else{
        alert("Name is not valid");
        
    }

    if (document.querySelector("#mailid").value.match(email_regex)){
        console.log(document.querySelector("#mailid").value);
    }
    else{
        alert("Email is not valid");
        
    }

    if (document.querySelector("#Phone").value.match(phone_regex)){
        console.log(document.querySelector("#Phone").value);
    }
    else{
        alert("Phone number is not valid");
        
    }

    if (document.querySelector("#regno").value.match(regno_regex)){
        console.log(document.querySelector("#regno").value);
    }
    else{
        alert("Registration number is not valid");
        
    }
    if (document.querySelector("#name").value.match(name_regex) && document.querySelector("#mailid").value.match(email_regex) && document.querySelector("#Phone").value.match(phone_regex) && document.querySelector("#regno").value.match(regno_regex)){
        alert("Success!")
    }

};


