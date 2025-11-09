import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKCMJjIs_MPmr7jhqKrNPaYT3lPW-cyN0",
  authDomain: "react-mascotas-coder.firebaseapp.com",
  projectId: "react-mascotas-coder",
  storageBucket: "react-mascotas-coder.firebasestorage.app",
  messagingSenderId: "1097867013132",
  appId: "1:1097867013132:web:1b1c9fc5a467dfd376d229"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);