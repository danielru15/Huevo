// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyx3iYrs914G7v5U7WPsjfxYkPjOQZJgM",
  authDomain: "huevo-c0bac.firebaseapp.com",
  projectId: "huevo-c0bac",
  storageBucket: "huevo-c0bac.appspot.com",
  messagingSenderId: "450540262161",
  appId: "1:450540262161:web:f3aa70cff178c03553b2b0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export {app,db}