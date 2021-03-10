import { debounce } from "@material-ui/core";
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

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    userName: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

    onChange(normalizedUser);
  });
};

export const loginWithGmail = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(googleProvider);
};
export const logoutGmail = () => {
  return firebase.auth().signOut();
};

export const findUserByEmail = (userEmail) => {
  return db
    .collection("users")
    .where("email", "==", userEmail)
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        const date = new Date(createdAt.seconds * 1000);
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        );

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        };
      });
    });
};
