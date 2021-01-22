import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA4t3cwYydHGFXeL8k65XN44uuEqaxS98o',
  authDomain: 'printing-solutions-co.firebaseapp.com',
  databaseURL: 'https://printing-solutions-co.firebaseio.com',
  projectId: 'printing-solutions-co',
  storageBucket: 'printing-solutions-co.appspot.com',
  messagingSenderId: '344939759766',
  appId: '1:344939759766:web:c19b59df97fee92c771ab7'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const loginWithEmail = () => {
  //   console.log(auth);

  //   const emailProvider =  auth.EmailAuthProvider();
  //   return auth.signInWithPopup(emailProvider);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(result => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      debugger;
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error);
    });
};

export default loginWithEmail;
