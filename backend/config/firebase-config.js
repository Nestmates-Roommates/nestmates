// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env("FIREBASE_APIKEY"),
  authDomain: env("FIREBASE_AUTHDOMAIN"),
  projectId: env("FIREBASE_PROJECTID"),
  storageBucket: env("FIREBASE_STORAGEBUCKET"),
  messagingSenderId: env("FIREBASE_MESSAGINGSENDERID"),
  appId: env("FIREBASE_APPID"),
  measurementId: env("FIREBASE_MEASUREMENTID")
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);