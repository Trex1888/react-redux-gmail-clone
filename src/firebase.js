import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYUvWk76RVGhGaD38BfkDbMLYbI3cFrpU",
  authDomain: "fir-cd083.firebaseapp.com",
  projectId: "fir-cd083",
  storageBucket: "fir-cd083.appspot.com",
  messagingSenderId: "1064160285887",
  appId: "1:1064160285887:web:25e3cf5c29aabef43fe20a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
