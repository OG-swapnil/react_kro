// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC0yX8vaeHj_mLWA1TS5itRdbQFFs9lZ2s",
  authDomain: "login-page-613db.firebaseapp.com",
  projectId: "login-page-613db",
  storageBucket: "login-page-613db.firebasestorage.app",
  messagingSenderId: "977595059730",
  appId: "1:977595059730:web:face969791e282f31ad2cb",
  measurementId: "G-BRTQGJPG47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };