// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlrwBDwFdwkutdVO2Ilg6KUPnFFwKWD2k",
  authDomain: "chat-harmonyo.firebaseapp.com",
  projectId: "chat-harmonyo",
  storageBucket: "chat-harmonyo.appspot.com",
  messagingSenderId: "295019787606",
  appId: "1:295019787606:web:eb01ac75f11c05b72d92f7",
  measurementId: "G-2K9ZW7N0C1"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const storage = app.storage("gs://chat-harmonyo.appspot.com");

export  {db, storage};