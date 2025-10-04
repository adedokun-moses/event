// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";            
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyDiXfaPT9uc6jZTwIZMbG8gYIJNLYnQAqI",
  authDomain: "easeevent.firebaseapp.com",
  projectId: "easeevent",
  storageBucket: "easeevent.firebasestorage.app",
  messagingSenderId: "1096545396881",
  appId: "1:1096545396881:web:4984490536711c9ed47730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);