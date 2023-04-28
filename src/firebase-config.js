
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaHomLx4ZFGtqGzgJLjGFYmuiOBya3W3Q",
  authDomain: "passmate-f9e07.firebaseapp.com",
  projectId: "passmate-f9e07",
  storageBucket: "passmate-f9e07.appspot.com",
  messagingSenderId: "925127990054",
  appId: "1:925127990054:web:0fbe3ec21b9cae57bc3fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);