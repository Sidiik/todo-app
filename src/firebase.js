import firebase from "firebase/compat";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAU3rZ1BRMahn8viIq3p0ZSLY5aXTUGnlA",
  authDomain: "todo-app-662a7.firebaseapp.com",
  projectId: "todo-app-662a7",
  storageBucket: "todo-app-662a7.appspot.com",
  messagingSenderId: "287082960504",
  appId: "1:287082960504:web:da844f5856bd4ac912bf8d",
});

const db = app.firestore();

export { db };
