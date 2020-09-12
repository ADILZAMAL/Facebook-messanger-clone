import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNc_su0yT4pNqWvMK0LXfnflC_2oNEjkY",
  authDomain: "facebook-messanger-clone-5f4c9.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-5f4c9.firebaseio.com",
  projectId: "facebook-messanger-clone-5f4c9",
  storageBucket: "facebook-messanger-clone-5f4c9.appspot.com",
  messagingSenderId: "692222949809",
  appId: "1:692222949809:web:e88b76ef7759d51c9d2590",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
