import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA4t3cwYydHGFXeL8k65XN44uuEqaxS98o',
  authDomain: 'printing-solutions-co.firebaseapp.com',
  databaseURL: 'https://printing-solutions-co.firebaseio.com',
  projectId: 'printing-solutions-co',
  storageBucket: 'printing-solutions-co.appspot.com',
  messagingSenderId: '344939759766',
  appId: '1:344939759766:web:c19b59df97fee92c771ab7'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const loginWithEmail = () => {
  //   console.log(auth);

  //   const emailProvider =  auth.EmailAuthProvider();
  //   return auth.signInWithPopup(emailProvider);

  const googleProvider = new firebase.auth.GoogleAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(result => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // ...
      debugger
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      // ...
      console.log(error)
    })
}

export default loginWithEmail
