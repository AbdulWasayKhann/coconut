  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBA1Z2Nu7vTAS3-MRBQ6jjFoWh7RDSRFW8",
authDomain: "coconut-5eb8d.firebaseapp.com",
projectId: "coconut-5eb8d",
storageBucket: "coconut-5eb8d.appspot.com",
messagingSenderId: "236328605685",
appId: "1:236328605685:web:de97b87478ae9dafb172bc",
measurementId: "G-FTKQK4SPYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js"

const db = getDatabase();
var orderBtn = document.getElementById("orderBtn");

var name = document.getElementById("name");
var address = document.getElementById("address");
var email = document.getElementById("email");
var productCode = document.getElementById("productCode");


function InsertData() {
    if (name.value !== "" && address.value !== "" && email.value !== "" && productCode.value !== "") {
        set(ref(db, "orders/"+email.value),{
            Name: name.value,
            Address: address.value,
            Email: email.value,
            ProductCode: productCode.value
        })
        .then(()=>{
            alert("Order Placed.");
        })
        .catche((error)=>{
            alert("Unable to place order.")
        })
    }
    else {
        alert("Unable to place order. Data Missing")
    }
    
}

orderBtn.addEventListener('click', InsertData);