// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxx6OWW-1nRZbDi7IDYwzRzR7l98Ra01E",
  authDomain: "logo-tech-f3479.firebaseapp.com",
  projectId: "logo-tech-f3479",
  storageBucket: "logo-tech-f3479.appspot.com",
  messagingSenderId: "231144841301",
  appId: "1:231144841301:web:0e02e5c15310f6664af4dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



