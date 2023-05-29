// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUKYJrKry73_ZY0_U5L3RZBC6EZQ3p83E",
    authDomain: "react-chat-196a9.firebaseapp.com",
    projectId: "react-chat-196a9",
    storageBucket: "react-chat-196a9.appspot.com",
    messagingSenderId: "1005780059403",
    appId: "1:1005780059403:web:d505b29bde54b382894e0e",
    measurementId: "G-WSJK59T7YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)