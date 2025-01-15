
// Element Definitions
var usernameInput = document.getElementById("username-inp")
var passwordInput = document.getElementById("password-inp")

// Buttons
var loginButtonEl = document.getElementById("login-btn")

// Click Behaviors
loginButtonEl.onclick = function () {
    init_login()
    window.location.href = "TicketList.html";
};

function init_login() {
    const username = usernameInput.value
    const password = passwordInput.value
    console.log(username)
    console.log(password)
    
}