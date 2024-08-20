import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAg-ZrWcyIFD6lUWru7bbw_Ifaze9aSfCk",
  authDomain: "invoices-app-af67a.firebaseapp.com",
  projectId: "invoices-app-af67a",
  storageBucket: "invoices-app-af67a.appspot.com",
  messagingSenderId: "963466603853",
  appId: "1:963466603853:web:b6aeda381f65ae28a5db04",
  measurementId: "G-9F4HF0MG6W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
