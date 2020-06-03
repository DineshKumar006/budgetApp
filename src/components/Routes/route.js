import React from 'react';
import {Route,Switch} from 'react-router-dom';
import  Home from '../home/Home';
import Login from '../login/login'
import PageNotFound from '../404Page/404Page'
 import './navlink.css'
import AddExpenses from '../expenses/AddExpenses'
import EditExpenses from '../expenses/EditExpense'
import PrivateRoute from './privateRoute'

// import PublicRoute from './publicRoute'

const Routes=(props)=>{

    return(
      
                 <div>          
                        <Switch>
                        <Route path='/' exact={true}  component={Login}/>
                        <PrivateRoute path='/dashboard' exact={true}  component={Home}/>
                        <PrivateRoute path='/CreateExpenses' exact={true}  component={AddExpenses}/>
                        <PrivateRoute path="/edit/:id"  exact={true}  component={EditExpenses}/>
                        <Route  component={PageNotFound}  />
                        </Switch>
                 </div>
    
       
    
    )
}




export default Routes