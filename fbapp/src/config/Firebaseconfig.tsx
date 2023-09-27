// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcztw1EL1n-Anf9ZL0QIRgEzTmzLw5Tgs",
  authDomain: "login-signup-in-react-with-fb.firebaseapp.com",
  databaseURL: "https://login-signup-in-react-with-fb-default-rtdb.firebaseio.com",
  projectId: "login-signup-in-react-with-fb",
  storageBucket: "login-signup-in-react-with-fb.appspot.com",
  messagingSenderId: "378498040306",
  appId: "1:378498040306:web:431db1c584f9a989a3ab6b",
  measurementId: "G-215SQVW1SS"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);