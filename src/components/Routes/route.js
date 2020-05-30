import React from 'react';
import {Route,Switch} from 'react-router-dom';
import  Home from '../home/Home';
import Login from '../login/login'
import NavLink from './NavLink'
import PageNotFound from '../404Page/404Page'
 import './navlink.css'
import AddExpenses from '../expenses/AddExpenses'
import EditExpenses from '../expenses/EditExpense'

export const Header=()=>{
    return(
        <header>
            <h1>Budget-App</h1>
            
            <div >
            <NavLink link='/' ><strong>Dashboard</strong></NavLink>
            <NavLink link='/login'><strong>Login</strong></NavLink>
            <NavLink  link="/CreateExpenses"><strong>CreateExpenses</strong></NavLink>
            <NavLink link="/edit/:id"></NavLink>
            </div>
           

        </header>
    )
}


const Routes=(props)=>{
    return(
        <div>

    <div>
        <Header/>
       
        <Switch>
            <Route path='/' exact={true}  component={Home}/>
            <Route path='/CreateExpenses' exact={true} component={AddExpenses}/>
            <Route path='/login' exact={true}  component={Login}/>
            {/* <Route path='/login/:id' exact={true}  component={Login}/> */}
            <Route path="/edit/:id" exact={true} component={EditExpenses}/>
            <Route  component={PageNotFound}  />
        </Switch>
    </div>
       
        </div>
    )
}

export default Routes