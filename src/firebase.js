
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0Ib_lcN1SGJ0tMxuV2ZtoEx4Xfgyxyfs",
  authDomain: "linkedin-clone-yt-a6fe1.firebaseapp.com",
  projectId: "linkedin-clone-yt-a6fe1",
  storageBucket: "linkedin-clone-yt-a6fe1.appspot.com",
  messagingSenderId: "449797060668",
  appId: "1:449797060668:web:917ea70a0a9fc6f0f92b39",
  measurementId: "G-P7NG9D4BFB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth,firebase };