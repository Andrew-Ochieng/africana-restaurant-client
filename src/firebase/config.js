// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWOjq0pooDF4VIB6JHDhUzDEnKWTmr8hc",
  authDomain: "afrikaan-restaurant.firebaseapp.com",
  projectId: "afrikaan-restaurant",
  storageBucket: "afrikaan-restaurant.appspot.com",
  messagingSenderId: "405015565626",
  appId: "1:405015565626:web:80b2302c93bade88ab6c03",
  measurementId: "G-NH7E8NHZM4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db};