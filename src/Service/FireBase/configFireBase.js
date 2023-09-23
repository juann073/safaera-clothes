// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCygvWo9zPa_IPc1o7rSVDquTyxuF_t5Mc",
  authDomain: "safaera-clothes.firebaseapp.com",
  projectId: "safaera-clothes",
  storageBucket: "safaera-clothes.appspot.com",
  messagingSenderId: "413002892997",
  appId: "1:413002892997:web:8183590383875d566692ac",
  measurementId: "G-7N9ZWF5JCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);