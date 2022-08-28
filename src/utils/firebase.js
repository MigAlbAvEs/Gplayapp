// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD7dXByO3L4YNYfmKcY3_LZ10pSVMfIyDs",
  authDomain: "gplay-e0503.firebaseapp.com",
  projectId: "gplay-e0503",
  storageBucket: "gplay-e0503.appspot.com",
  messagingSenderId: "769883964731",
  appId: "1:769883964731:web:eb4dab5240a0c89294631e"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);