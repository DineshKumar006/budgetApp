import React from 'react'
import {LoginAuthStart} from '../../ReduxStore/actions/Auth';
import {connect} from 'react-redux'

const Login=(props)=>{
    return(
        <div>
{/* <p>This is login page with id: {props.match.params.id}</p> */}



    <button onClick={props.LoginAuth}>Login</button>

        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        LoginAuth:()=>dispatch(LoginAuthStart())
    }
}

export default connect(undefined,mapDispatchToProps)(Login)