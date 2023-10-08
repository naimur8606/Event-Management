// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPjjcwmTW1CNdFCb8CxWM-Q5NdmZwjy2A",
  authDomain: "wedding-management-cb140.firebaseapp.com",
  projectId: "wedding-management-cb140",
  storageBucket: "wedding-management-cb140.appspot.com",
  messagingSenderId: "387446930724",
  appId: "1:387446930724:web:0889f3401b6674256687b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;