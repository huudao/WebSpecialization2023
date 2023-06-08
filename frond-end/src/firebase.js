// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {}  from "@firebase/firestore-types"
const firebaseConfig = {
    apiKey: "AIzaSyDtGhjXGsB799nF0pngTfC6UW6DmpHCYPc",
    authDomain: "upload-img-e4bca.firebaseapp.com",
    projectId: "upload-img-e4bca",
    storageBucket: "upload-img-e4bca.appspot.com",
    messagingSenderId: "636385531477",
    appId: "1:636385531477:web:2957cb495ab26a9228a6dc",
    measurementId: "G-GLB4M02ZGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFire