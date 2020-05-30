
import React from 'react'

const Info=(props)=>{
    return(
        <div>
            <h2>Login page</h2>

            {props.info}
        </div>
    )
}

 const Authenticate=(WrappedComponent)=>{
     return (props)=>(
         <div>
             {props.isAuth?
             <div>
                 'Your are authenticated'

            <WrappedComponent {...props}/>
                </div> 

             :'Need to Authenticate!!!!!'}
         </div>
     )

}

export const ReqAuth=Authenticate(Info)