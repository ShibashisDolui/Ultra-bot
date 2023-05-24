import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2WJ_y-AGYye7ZJPg6nBAyf-ZveKLOBZo",
  authDomain: "ultrabot-1.firebaseapp.com",
  projectId: "ultrabot-1",
  storageBucket: "ultrabot-1.appspot.com",
  messagingSenderId: "788866897312",
  appId: "1:788866897312:web:ec5ebfa8aa49404b4980c5",
  measurementId: "G-1KG7QYNMNG",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
