// var pass = "";
// while (pass != "admin") {
//     pass = prompt("Ввдите пароль")
// }
// document.write("Добро пожаловать");
function check() {
    pass1 = document.getElementById("pass1").value;
    pass2 = document.getElementById("pass2").value;
    if (pass1 == pass2 || pass2 =="")
    {
        document.getElementById("pass2").style.background = "green";
        document.getElementById("pass1").style.background = "green";
    }
    else{
    document.getElementById("pass1").style.background = "red";
    document.getElementById("pass2").style.background = "red";
    }
}
function app() {
    document.getElementById('area').innerHTML = 'Комментарий';
}
