// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBMHHaZWy1oZhveAyoj-jQ0_yoKvnzop_c",

  authDomain: "oysterestate-d61f1.firebaseapp.com",

  projectId: "oysterestate-d61f1",

  storageBucket: "oysterestate-d61f1.appspot.com",

  messagingSenderId: "230142385987",

  appId: "1:230142385987:web:5a30b6e707a0ed8b9959f6"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)