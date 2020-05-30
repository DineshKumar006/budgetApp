import React from 'react'
import {NavLink} from 'react-router-dom'
import './navlink.css'
const Navlink=(props)=>{
    return(
        <div>
                <NavLink to={props.link} activeClassName={'is-active'} exact={true}> {props.children}</NavLink>
        </div>
    )
}

export default Navlink