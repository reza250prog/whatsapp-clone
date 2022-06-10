import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrhMunI5IF3mRSkNWKDmf8gvbryFKTFWo",
  authDomain: "whatsapp-clone-5123e.firebaseapp.com",
  projectId: "whatsapp-clone-5123e",
  storageBucket: "whatsapp-clone-5123e.appspot.com",
  messagingSenderId: "518016124807",
  appId: "1:518016124807:web:29d888d91f813652d37522",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
