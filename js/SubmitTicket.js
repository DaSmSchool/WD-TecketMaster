import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js'
// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js'
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
console.log(auth)
const db = getFirestore(app)

onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    
    // ...
    } else {
    // User is signed out
    // ...

    window.location.href = "index.html";
    }
})


// Buttons
var submitTicketButtonEl = document.getElementById("submit-ticket-btn")

// Element references
var descriptionInp = document.getElementById("response-description")
var itemTypeInp = document.getElementById("response-itemtype")
var roomInp = document.getElementById("response-room")
var actionFeedback = document.getElementById("error-feedback")

// Click Behaviors
submitTicketButtonEl.onclick = function () {
    submitTicket()
    //window.location.href = "Confirm.html";
};

async function submitTicket() {
    try {
    const docRef = await addDoc(collection(db, "tickets"), {
        email: auth.currentUser.email,
        itemtype: descriptionInp.value,
        room: itemTypeInp.value,
        description: roomInp.value
    });
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "Confirm.html";
    } catch (e) {
    console.error("Error adding document: ", e);
    actionFeedback.textContent = e
    }
}