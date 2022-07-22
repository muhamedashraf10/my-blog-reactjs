// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCNNEDzP7Mu4EZpn20yc8aJWEuur0gKXU",
  authDomain: "blog-f27fa.firebaseapp.com",
  projectId: "blog-f27fa",
  storageBucket: "blog-f27fa.appspot.com",
  messagingSenderId: "417559783788",
  appId: "1:417559783788:web:f8c114e6e66c13b90aab49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
