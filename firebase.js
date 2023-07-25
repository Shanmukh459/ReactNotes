import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjkmtK9b73sTLTk6Z2BItPJsXu7qOSf-0",
  authDomain: "react-notes-f7083.firebaseapp.com",
  projectId: "react-notes-f7083",
  storageBucket: "react-notes-f7083.appspot.com",
  messagingSenderId: "347064070918",
  appId: "1:347064070918:web:14cbb81670709f855b6487"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")