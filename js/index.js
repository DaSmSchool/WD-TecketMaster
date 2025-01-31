import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js'
// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js'
// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh3TOUuvJEvLId1eWgibJnSvXDLmm4TVg",
    authDomain: "tecketmaster-4e054.firebaseapp.com",
    databaseURL: "https://tecketmaster-4e054-default-rtdb.firebaseio.com",
    projectId: "tecketmaster-4e054",
    storageBucket: "tecketmaster-4e054.firebasestorage.app",
    messagingSenderId: "675924734068",
    appId: "1:675924734068:web:1bdfc94e1006f9d9086121"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    window.location.href = "TicketList.html";
    // ...
    } else {
    // User is signed out
    // ...
    }
})
//console.log(auth)

// Element Definitions
var emailInput = document.getElementById("email-inp")
var passwordInput = document.getElementById("password-inp")
var loginFeedbackEl = document.getElementById("login-feedback")

// Buttons
var loginBtn = document.getElementById("login-btn")
var createAccountBtn = document.getElementById("create-account-btn")

// Click Behaviors
loginBtn.onclick = function () {
    init_login()
};

createAccountBtn.onclick = function () {
    init_create_account()
};

function init_create_account() {
    const email = emailInput.value
    const password = passwordInput.value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    window.location.href = "TicketList.html";
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    loginFeedbackEl.textContent=errorMessage
    });
}

function init_login() {
    const email = emailInput.value
    const password = passwordInput.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    window.location.href = "TicketList.html";
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    loginFeedbackEl.textContent=errorMessage
    });
}