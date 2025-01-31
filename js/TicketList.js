import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js'
// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'
import { getFirestore, addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js'
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
var createTicketButtonEl = document.getElementById("create-ticket-btn")

const ticketListEl = document.getElementById("ticket-list-display")

// Click Behaviors
createTicketButtonEl.onclick = function () {
    window.location.href = "CreateTicket.html";
};

async function load_tickets() {
    const ticketDocs=collection(db, "tickets")
    const tdocs = await getDocs(ticketDocs)
    tdocs.forEach((doc) => {
        if (doc.id != "ticket-0") {
            // <div class="ticket-disp">
            //     <div class="ticket-disp-container">
            //         <section class="ticket-disp-info">
            //             <div class="d-ticket-email"></div>
            //             <div class="d-ticket-room"></div>
            //             <div class="d-ticket-itemtype"></div>
            //             <div class="d-ticket-description"></div>
            //         </section>
            //         <section class="ticket-disp-btns">
            //             <button class="ticket-disp-info-btn">Ticket Information</button>
            //             <button class="ticket-disp-clear-btn">Clear Ticket</button>
            //         </section>
            //     </div>
            // </div>
            console.log(doc.id, " => ", doc.data())
            const info = doc.data()
            
            const baseTicket = document.createElement("div")
            baseTicket.classList.add("ticket-disp")
            
            const dispContainer = document.createElement("div")
            dispContainer.classList.add("ticket-disp-container")
            baseTicket.appendChild(dispContainer)

            const infoSection = document.createElement("section")
            const buttonSection = document.createElement("section")
            infoSection.classList.add("ticket-disp-info")
            buttonSection.classList.add("ticket-disp-btns")

            dispContainer.appendChild(infoSection)
            dispContainer.appendChild(buttonSection)
            
            const emailEl = document.createElement("div")
            emailEl.classList.add("d-ticket-email")
            const roomEl = document.createElement("div")
            roomEl.classList.add("d-ticket-room")
            const itemtypeEl = document.createElement("div")
            itemtypeEl.classList.add("d-ticket-itemtype")
            const descriptionEl = document.createElement("div")
            descriptionEl.classList.add("d-ticket-description")
            
            infoSection.appendChild(emailEl)
            infoSection.appendChild(roomEl)
            infoSection.appendChild(itemtypeEl)
            infoSection.appendChild(descriptionEl)
            
            
            ticketListEl.appendChild(baseTicket)
        }
    });
}

load_tickets()