import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import  {Provider} from 'react-redux'
import ExpensReducer from './ReduxStore/reducer/ExpenseReducer';
import FilterReducer from './ReduxStore/reducer/FilterReducer';
import FetchReducer from './ReduxStore/reducer/FetchExpenseReducer';

import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'


const rootReducer=combineReducers({
    expenseReducer:ExpensReducer,
    filterReducer:FilterReducer,
    fetchExpensesReducer:FetchReducer,

}) 

// let composeEnhancers = null;
// if (process.env.NODE_ENV === 'development') {
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// } else {
//     composeEnhancers = compose;
// }

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

// console.log(store.getState())

const app=(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>
)

 ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
