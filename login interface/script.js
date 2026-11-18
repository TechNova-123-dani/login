
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");

// Show or hide the password
showPassword.addEventListener("change", function () {

    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

// Handle form submission
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (email.value === "" || password.value === "") {

        message.textContent = "Please fill in all fields.";
        message.style.color = "red";

    } else {

        message.textContent = "Login form submitted successfully!";
        message.style.color = "green";

    }

});