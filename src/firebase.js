// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuRPlBAXDnW9yU2bmcXtapYR2dc6NAHo",
  authDomain: "stisfyingyou.firebaseapp.com",
  projectId: "stisfyingyou",
  storageBucket: "stisfyingyou.firebasestorage.app",
  messagingSenderId: "141787004407",
  appId: "1:141787004407:web:a61a2b53de693ca98142f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app)

export {auth_mod}
export default app