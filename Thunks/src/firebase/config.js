// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqKnyii0mlwMYB-9UYwbAYr9CMQfB--v4",
  authDomain: "react-curso-8ba4f.firebaseapp.com",
  projectId: "react-curso-8ba4f",
  storageBucket: "react-curso-8ba4f.firebasestorage.app",
  messagingSenderId: "1065530347396",
  appId: "1:1065530347396:web:a744bba62dab74140257d1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
