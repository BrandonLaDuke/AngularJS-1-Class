function login() {
    var userName = document.getElementById("userName").value.toLowerCase();
    var password = document.getElementById("password").value.toLowerCase();
    var uAnswer = "admin";
    var pAnswer = "123";
    console.log(userName);
        console.log(password);
    if (userName === uAnswer && password === pAnswer) {
        alert("Welcome to system!")
        
    }
}