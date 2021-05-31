import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSZX7euFaAJR6dqfAgabrKNXtz5NUQCmY",
  authDomain: "sulthanauliya-93b5b.firebaseapp.com",
  projectId: "sulthanauliya-93b5b",
  storageBucket: "sulthanauliya-93b5b.appspot.com",
  messagingSenderId: "928005354940",
  appId: "1:928005354940:web:170e9e9493bf2f2c19e7b9",
  measurementId: "G-JGZ3032DSX",
});

var db = firebaseApp.firestore();

export { db };
