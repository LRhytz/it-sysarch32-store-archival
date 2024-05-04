// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbIB7deYjR9IajHWUck2heu29RKicIEZ0",
  authDomain: "it-sysarch32-store-archival.firebaseapp.com",
  projectId: "it-sysarch32-store-archival",
  storageBucket: "it-sysarch32-store-archival.appspot.com",
  messagingSenderId: "447902505788",
  appId: "1:447902505788:web:248432a1260cf846199c39",
  measurementId: "G-4X3SH8654Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
