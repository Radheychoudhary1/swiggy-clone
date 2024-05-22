// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZYYTEgLSG2UsX1he9TxuaeASu_rxRGhU",
    authDomain: "swiggy-clone-903cc.firebaseapp.com",
    projectId: "swiggy-clone-903cc",
    storageBucket: "swiggy-clone-903cc.appspot.com",
    messagingSenderId: "268918829758",
    appId: "1:268918829758:web:9fbb9c8702de751ced24ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);