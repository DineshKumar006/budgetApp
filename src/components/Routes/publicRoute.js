import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import React  from 'react'

 const PublicRoute=({isAuthenticated,component:Component, ...rest})=>{
    //  console.log(...rest)
    return(
        <div>
            <Route  {...rest} component={(props)=>(

         isAuthenticated?
              
                    <Redirect to="/dashboard"/>
                   
             :  <Component {...props}/>

            )}/>

        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        isAuthenticated : !! state.AuthReducer.uid
    }
}

export default connect(mapStateToProps)(PublicRoute)

