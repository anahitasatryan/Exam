import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmU3XDjTYTPoHUB_l5hTfYz7fGfTULibI",
  authDomain: "exam-d3412.firebaseapp.com",
  projectId: "exam-d3412",
  storageBucket: "exam-d3412.appspot.com",
  messagingSenderId: "323284146103",
  appId: "1:323284146103:web:a082424b7e11efccc3ba32",
  measurementId: "G-F1ES3TWCMG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
