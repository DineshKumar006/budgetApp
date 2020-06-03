import {firebase,googleAuthProvider} from '../../firebase/firebase'


export const Login=(uid)=>{
    return{
        type:'Login',
        uid
    }
}




export const LoginAuthStart=()=>{

    return()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}



export const Logout=()=>{
    return{
        type:'Logout',
       
    }
}


export const LogoutStart=()=>{
    return()=>{
        return firebase.auth().signOut();
    }
}