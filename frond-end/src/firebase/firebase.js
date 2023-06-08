import firebase from "firebase/compat/app";
import  "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtGhjXGsB799nF0pngTfC6UW6DmpHCYPc",
    authDomain: "upload-img-e4bca.firebaseapp.com",
    projectId: "upload-img-e4bca",
    storageBucket: "upload-img-e4bca.appspot.com",
    messagingSenderId: "636385531477",
    appId: "1:636385531477:web:2957cb495ab26a9228a6dc",
    measurementId: "G-GLB4M02ZGB"
};
firebase.initializeApp(firebaseConfig);
const  storage=firebase.storage();
export {storage,firebase as default}
