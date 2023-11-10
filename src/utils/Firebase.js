// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-zMeZ1eUVR-q1-RMDoCtBdsgXRtZyQ44",
  authDomain: "netflix-gpt-ceda5.firebaseapp.com",
  projectId: "netflix-gpt-ceda5",
  storageBucket: "netflix-gpt-ceda5.appspot.com",
  messagingSenderId: "785139773444",
  appId: "1:785139773444:web:3275813aeb657484490551",
  measurementId: "G-HTV7DPNNN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const  auth =
const analytics = getAnalytics(app);
