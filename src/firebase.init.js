// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmVZDhBNTefM6Drywr4s4ONVFkZpPiC8",
  authDomain: "manufacturer-website-ba856.firebaseapp.com",
  projectId: "manufacturer-website-ba856",
  storageBucket: "manufacturer-website-ba856.appspot.com",
  messagingSenderId: "820284162702",
  appId: "1:820284162702:web:ed849a496513c32ffb3fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;