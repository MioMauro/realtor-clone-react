// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8jSMYxjV6AmoXENzo2rU0n3v13rtsZMs",
  authDomain: "realtor-clone-20bcd.firebaseapp.com",
  projectId: "realtor-clone-20bcd",
  storageBucket: "realtor-clone-20bcd.appspot.com",
  messagingSenderId: "654238485669",
  appId: "1:654238485669:web:b2f8a87139329a4d4d514c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()