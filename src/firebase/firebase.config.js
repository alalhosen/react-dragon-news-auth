// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbVez9JO4zSJzVNF2TA9WCsEUyue_S-E0",
  authDomain: "react-dragon-news-auth-85635.firebaseapp.com",
  projectId: "react-dragon-news-auth-85635",
  storageBucket: "react-dragon-news-auth-85635.firebasestorage.app",
  messagingSenderId: "759034348153",
  appId: "1:759034348153:web:b6e60dbd5bf96e1e7f8aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;