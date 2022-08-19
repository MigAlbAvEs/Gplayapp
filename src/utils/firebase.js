// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBV7K9Nd7_KgIBMZvyEggmmhbWWZC7dAE",
  authDomain: "gplay-721ce.firebaseapp.com",
  projectId: "gplay-721ce",
  storageBucket: "gplay-721ce.appspot.com",
  messagingSenderId: "239352395437",
  appId: "1:239352395437:web:8c651df1de33dbd85e7824"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);