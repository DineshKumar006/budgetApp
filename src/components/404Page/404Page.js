import React from 'react'
// import NavLink from '../Routes/NavLink'
import {NavLink} from 'react-router-dom'

const PageNotFound=(props)=>{
    console.log(props)
    return(
        <div>
            <h1>404! page not found</h1>
            <NavLink to='/' >Go to dashboard</NavLink>
        </div>
    )
}

export default PageNotFound