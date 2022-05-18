import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYyXuDde-B57GKjgw3XYUBonXv-2YOsjQ",
  authDomain: "simple-to-do-dd55d.firebaseapp.com",
  projectId: "simple-to-do-dd55d",
  storageBucket: "simple-to-do-dd55d.appspot.com",
  messagingSenderId: "465102439964",
  appId: "1:465102439964:web:1ddaedb7a9572e18dc41d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;