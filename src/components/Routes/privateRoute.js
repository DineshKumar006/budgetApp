import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import React  from 'react'
import Header from './Header'

 const PrivateRoute=({isAuthenticated,component:Component, ...rest})=>{
     console.log(...rest)
    return(
        <div>
            <Route  {...rest} component={(props)=>(

         isAuthenticated?
                (<div>
                    <Header/>
                    <Component {...props}/>
                </div>) : <Redirect to="/"/>

            )}/>

        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        isAuthenticated : !! state.AuthReducer.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)

