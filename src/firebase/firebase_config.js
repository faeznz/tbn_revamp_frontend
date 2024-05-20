// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkEnuaxFBQEcu6183m0_tCwDHoLjjv1PI",
  authDomain: "tbn-revamp.firebaseapp.com",
  projectId: "tbn-revamp",
  storageBucket: "tbn-revamp.appspot.com",
  messagingSenderId: "403860750610",
  appId: "1:403860750610:web:adedfbbf2464724dac33cb",
  measurementId: "G-KR98VZ2PND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;