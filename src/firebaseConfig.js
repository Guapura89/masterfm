// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY_FB,
  authDomain: "masterfm-d4281.firebaseapp.com",
  projectId: "masterfm-d4281",
  storageBucket: "masterfm-d4281.appspot.com",
  messagingSenderId: "867274225559",
  appId: "1:867274225559:web:8124b24854aa4b88dd76d2",
  measurementId: "G-L5YP03C679",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
