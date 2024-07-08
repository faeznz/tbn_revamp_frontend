// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_CZlyw6pBCbsVBRJdVzP2cjODyAsLOcw",
  authDomain: "tbn-indonesia-d874a.firebaseapp.com",
  projectId: "tbn-indonesia-d874a",
  storageBucket: "tbn-indonesia-d874a.appspot.com",
  messagingSenderId: "163276479639",
  appId: "1:163276479639:web:2be29f436c9754d24a9dd2",
  measurementId: "G-TLNTV1D3CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;