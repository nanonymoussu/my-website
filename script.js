// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2qysrz2lruy_Fkk2hcA6XKlRV9lw2QzM",
  authDomain: "nanonymoussu-site.firebaseapp.com",
  projectId: "nanonymoussu-site",
  storageBucket: "nanonymoussu-site.appspot.com",
  messagingSenderId: "373715548442",
  appId: "1:373715548442:web:6b1773cf7b2ef5c0a8d4a3",
  measurementId: "G-98WM4T7TQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
