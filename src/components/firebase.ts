import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJhc5LFFBxZY-9sowGd6MTXLrMKhNwHNU",
  authDomain: "project-mau-cb9f4.firebaseapp.com",
  projectId: "project-mau-cb9f4",
  storageBucket: "project-mau-cb9f4.appspot.com",
  messagingSenderId: "730076773452",
  appId: "1:730076773452:web:2be39464fb37e47ba308e9",
  // databaseURL:"https://project-mau-cb9f4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app);

const db = getFirestore(app);

export const insertDocument = (cName: string, doc: any) =>
  addDoc(collection(db, cName), doc);