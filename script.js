// script.js

function checkPassword() {
    const correctPassword = "R1a2k3!4?";
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === correctPassword){
        window.location.href = "My_First_Game.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById("passwordInput");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
