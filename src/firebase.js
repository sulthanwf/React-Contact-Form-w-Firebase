import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  //Your API KEY
});

var db = firebaseApp.firestore();

export { db };
