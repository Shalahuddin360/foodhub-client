// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2oWKPCiIof8qvLjYycNmEs_1NHdEi0KU",
  authDomain: "the-foodhub-with-firebase.firebaseapp.com",
  projectId: "the-foodhub-with-firebase",
  storageBucket: "the-foodhub-with-firebase.appspot.com",
  messagingSenderId: "52337634461",
  appId: "1:52337634461:web:a656807bb793ffd432b874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;