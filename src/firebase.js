import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHQ4BuFT4BenTMkR2L2oAq8FmolmO-x-w",
  authDomain: "linkedin1-6a832.firebaseapp.com",
  projectId: "linkedin1-6a832",
  storageBucket: "linkedin1-6a832.appspot.com",
  messagingSenderId: "446155783554",
  appId: "1:446155783554:web:cf6c76b7e00b656511e39b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
