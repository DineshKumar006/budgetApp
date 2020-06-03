import React from 'react';

import NavLink from './NavLink'
 import './navlink.css'
import {LogoutStart} from '../../ReduxStore/actions/Auth'
import {connect} from 'react-redux'

import {createBrowserHistory} from 'history';


export const history=createBrowserHistory()

const Header=(props)=>{
    return(
        <React.Fragment>
        <div>
            <h1 className={'header'}>Budget App.</h1>
        </div>
        <header>
            
        <button onClick={props.LogoutAuth}>Logout</button>
            <div >

            <NavLink link='/dashboard' ><strong>Dashboard</strong></NavLink>
            <NavLink  link="/CreateExpenses"><strong>CreateExpenses</strong></NavLink>
            {/* <NavLink link="/edit/:id"></NavLink> */}
            </div>
           

        </header>
        </React.Fragment>
        
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        LogoutAuth:()=>dispatch(LogoutStart())
    }
}



export default connect(undefined,mapDispatchToProps)(Header)