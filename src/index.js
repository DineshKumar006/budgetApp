import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom'
import  {Provider} from 'react-redux'
import ExpensReducer from './ReduxStore/reducer/ExpenseReducer';
import FilterReducer from './ReduxStore/reducer/FilterReducer';
import FetchReducer from './ReduxStore/reducer/FetchExpenseReducer';
import AuthReducer from './ReduxStore/reducer/AuthReducer'
import {firebase} from './firebase/firebase'
import {Login,Logout} from './ReduxStore/actions/Auth'
import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

import {createBrowserHistory} from 'history';

export const history=createBrowserHistory()

const rootReducer=combineReducers({
    expenseReducer:ExpensReducer,
    filterReducer:FilterReducer,
    fetchExpensesReducer:FetchReducer,
    AuthReducer:AuthReducer

}) 


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

// console.log(store.getState())

const app=(
    <Provider store={store}>

        <Router history={history}>
        <App/>
        </Router>

    </Provider>
)


let isRender=false;
const renderAuth=()=>{

    if(!isRender){
        ReactDOM.render(app, document.getElementById('root'));
        isRender=true
    }

}


//  ReactDOM.render(app, document.getElementById('root'));


 firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        
      renderAuth()

      store.dispatch(Login(user.uid))
    //   console.log(user.email)
    //   console.log(user.uid)
        console.log('Logged-in')
        if(history.location.pathname==='/'){
          history.push('/dashboard')
        }
    }else{
        store.dispatch(Logout())
       renderAuth()
         console.log('logged-out')
        history.push('/')
  
    }
  });

registerServiceWorker();


