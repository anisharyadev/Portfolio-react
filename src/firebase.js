
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyADyCmVRMimRc9QbkC4WK6s8r0tTBJMnaM",
  authDomain: "aryadev-2b0ef.firebaseapp.com",
  projectId: "aryadev-2b0ef",
  storageBucket: "aryadev-2b0ef.firebasestorage.app",
  messagingSenderId: "374075958002",
  appId: "1:374075958002:web:cf1d2e16c87f8ea4d8e66b",
  measurementId: "G-W0S928Q2NV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // Export the database