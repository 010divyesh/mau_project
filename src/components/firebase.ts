import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAJhc5LFFBxZY-9sowGd6MTXLrMKhNwHNU",
  authDomain: "project-mau-cb9f4.firebaseapp.com",
  projectId: "project-mau-cb9f4",
  storageBucket: "project-mau-cb9f4.appspot.com",
  messagingSenderId: "730076773452",
  appId: "1:730076773452:web:2be39464fb37e47ba308e9",
  databaseURL:"https://project-mau-cb9f4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)