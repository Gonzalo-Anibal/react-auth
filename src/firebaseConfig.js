// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ixEUhm468pDeLYaC2MgyWUQQbgIz61Q",
  authDomain: "escalab-shop.firebaseapp.com",
  projectId: "escalab-shop",
  storageBucket: "escalab-shop.appspot.com",
  messagingSenderId: "317063756803",
  appId: "1:317063756803:web:d3804dd7dc6ae68adfe236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);