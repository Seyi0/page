// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCOOawBKeYRvPMM8okc76a7M3PH4mKJmEc",
  authDomain: "react-auth-742c8.firebaseapp.com",
  projectId: "react-auth-742c8",
  storageBucket: "react-auth-742c8.appspot.com",
  messagingSenderId: "46121971694",
  appId: "1:46121971694:web:2fd2170bc5ebbc087268ff",
  measurementId: "G-HH9BN5C44N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;