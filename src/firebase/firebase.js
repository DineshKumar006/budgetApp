 import * as firebase from 'firebase'

// const firebase=require('firebase')

 const firebaseConfig = {
    apiKey: "AIzaSyCj6y9FdITYBSsys88gCl9Ilypw_kj022w",
    // authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://budget-app-be952.firebaseio.com/",
    projectId: "budget-app-be952",
    // storageBucket: "myapp-project-123.appspot.com",
    // messagingSenderId: "65211879809",
    // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    // measurementId: "G-8GSGZQ44ST"
  };


  firebase.initializeApp(firebaseConfig)
const  database= firebase.database();
// database.ref('data/name').set('Dinesh kumar')



//  database.ref('newDetails').set({
//      name:'Latha',
//      age:22,
//      education:{
//          graduate:'B-Tech',
//          branch:'CSE',
//         //  employee:'S/W'  
//            }
//  }).then(res=>{
//      console.log('inserted')
//  }).catch(e=>{
//      console.log(e)
//  })


export default database;
