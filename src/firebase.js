// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNFwCzqIs2SRPyfUJ8W8LjWsPtE_8LMys",
  authDomain: "chat-38f65.firebaseapp.com",
  projectId: "chat-38f65",
  storageBucket: "chat-38f65.appspot.com",
  messagingSenderId: "450226676984",
  appId: "1:450226676984:web:4a6fc36e913610d2dc470d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();