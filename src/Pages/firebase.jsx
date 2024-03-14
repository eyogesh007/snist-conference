// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import getStorage function

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzI6X6IqU8GxEv8ccMxrItxaqqrnqRwyc",
  authDomain: "mafia-b94f0.firebaseapp.com",
  databaseURL: "https://mafia-b94f0-default-rtdb.firebaseio.com",
  projectId: "mafia-b94f0",
  storageBucket: "mafia-b94f0.appspot.com",
  messagingSenderId: "277549581496",
  appId: "1:277549581496:web:5af10b7fb305c338ef604d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
