import firebase from "firebase/app";
import "firebase/auth"; // Import the authentication module if you're using authentication

// Paste your Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyAES16lCGAHnxI1LV9XXthTP8-fKUSQFBI",
  authDomain: "flixxit-de0e7.firebaseapp.com",
  projectId: "flixxit-de0e7",
  storageBucket: "flixxit-de0e7.appspot.com",
  messagingSenderId: "508728589006",
  appId: "1:508728589006:web:2a3467a3fc875e045fee9f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
