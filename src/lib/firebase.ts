import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { Projector } from "lucide-react";

const firebaseConfig ={
   apiKey: "AIzaSyCwrYWEcQ9vkwbnYthtbslvAFcjsAAXcFc",
  authDomain: "ui-ux-trade-pro.firebaseapp.com",
  projectId: "ui-ux-trade-pro",
  storageBucket: "ui-ux-trade-pro.firebasestorage.app",
  messagingSenderId: "591123722972",
  appId: "1:591123722972:web:34157078b6e8d36ece3a19"

};

const app =initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const db =getFirestore(app);
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwrYWEcQ9vkwbnYthtbslvAFcjsAAXcFc",
  authDomain: "ui-ux-trade-pro.firebaseapp.com",
  projectId: "ui-ux-trade-pro",
  storageBucket: "ui-ux-trade-pro.firebasestorage.app",
  messagingSenderId: "591123722972",
  appId: "1:591123722972:web:34157078b6e8d36ece3a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/