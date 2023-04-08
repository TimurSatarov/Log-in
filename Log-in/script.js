window.onload =()=>{
    this.sessionStorage.setItem('username','timur');
    this.sessionStorage.setItem('password','lenovo');
}
var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var from = document.querySelector('form');
from.onsubmit=()=>{
    return false;
}
login.onclick=()=>{
    if((input[0].value != "")&&(input[1].value != '')){
        if((input[0].value == sessionStorage.getItem("username"))&&(input[1].value == sessionStorage.getItem("password"))){
            from.onsubmit =()=>{
                window.location.href = "interface.html";
                return true;
            }
            window.location.href = "/interface.html";
            

        }else{
            if((input[0].value != sessionStorage.getItem("username"))){
                input[0].nextElementSibling.textContent = "Username is incorrect";
                setTimeout(()=>{
                    input[0].nextElementSibling.textContent = "";
                },2000);
            }
            if((input[1].value != sessionStorage.getItem("password"))){
                input[1].nextElementSibling.textContent = "password is incorrect";
                setTimeout(()=>{
                    input[1].nextElementSibling.textContent = "";
                },2000);
            }
        }
    }else{
        if(input[0].value == ""){
            input[0].nextElementSibling.textContent = "Username is empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
        },2000);
        }
        if(input[1].value == ""){
            input[1].nextElementSibling.textContent = "Password is empty";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
        },2000);
        }
    }
}           