import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4t3cwYydHGFXeL8k65XN44uuEqaxS98o",
  authDomain: "printing-solutions-co.firebaseapp.com",
  databaseURL: "https://printing-solutions-co.firebaseio.com",
  projectId: "printing-solutions-co",
  storageBucket: "printing-solutions-co.appspot.com",
  messagingSenderId: "344939759766",
  appId: "1:344939759766:web:c19b59df97fee92c771ab7",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const addUser = ({ userId, email, userName, rol, state }) => {
  return db.collection("users").add({
    userId,
    email,
    userName,
    rol,
    state,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    lastUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const loginWithGmail = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      debugger;
    })
    .catch((error) => {
      console.log(error);
    });
};
