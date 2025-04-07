// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB4aDbxoHNBmYLr9b-hkgAdxplpcloNFo",
    authDomain: "tomato-96812.firebaseapp.com",
    projectId: "tomato-96812",
    storageBucket: "tomato-96812.firebasestorage.app",
    messagingSenderId: "704928116521",
    appId: "1:704928116521:web:a849db2e9b29c97f1dd138",
    measurementId: "G-NJP7N255GK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);