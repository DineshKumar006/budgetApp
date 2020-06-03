 import * as firebase from 'firebase'

// const firebase=require('firebase')

 const firebaseConfig = {
  apiKey: "AIzaSyCj6y9FdITYBSsys88gCl9Ilypw_kj022w",
  authDomain: "budget-app-be952.firebaseapp.com",
  databaseURL: "https://budget-app-be952.firebaseio.com",
  projectId: "budget-app-be952",
  storageBucket: "budget-app-be952.appspot.com",
  messagingSenderId: "577117250255",
  appId: "1:577117250255:web:4490ef3a1b3141c570cdba",
  measurementId: "G-JEKK3N098Z"
  };



  firebase.initializeApp(firebaseConfig)
const  database= firebase.database();

const googleAuthProvider=new firebase.auth.GoogleAuthProvider();



export {googleAuthProvider,firebase,database  as default};

 
