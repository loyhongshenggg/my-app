// import all functions needed from the SDKS needed
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FIREBASE_APIKEY="AIzaSyDfJKWvfF0P_rCm_rQ2jtlYT2SP8b6A1rc"
const FIREBASE_AUTHDOMAIN="the-world-s-port-of-call.firebaseapp.com"
const FIREBASE_PROJECTID="the-world-s-port-of-call"
const FIREBASE_STORAGEBUCKET="the-world-s-port-of-call.appspot.com"
const FIREBASE_MESSAGINGSENDERID="316778582160"
const FIREBASE_APPID="1:528592735479:web:bcf6759e6bf7db3414d7f2"

// Initialize Firebase
const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    projectId: FIREBASE_PROJECTID,
    storageBucket: FIREBASE_STORAGEBUCKET,
    messagingSenderId: FIREBASE_MESSAGINGSENDERID,
    appId: FIREBASE_APPID,
  }

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);