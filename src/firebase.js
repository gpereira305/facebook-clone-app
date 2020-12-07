// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBiKQNTfFX1rg84pqm0yIIPr3GnjyRXxBM",
    authDomain: "facebook-clone-49753.firebaseapp.com",
    projectId: "facebook-clone-49753",
    storageBucket: "facebook-clone-49753.appspot.com",
    messagingSenderId: "533525536332",
    appId: "1:533525536332:web:00cc6138135f458bea9ee9",
    measurementId: "G-K50N5YKJYT"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  
  export {auth, provider};
  export  default db; 