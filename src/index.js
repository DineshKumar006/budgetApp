import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import  {Provider} from 'react-redux'
import ExpensReducer from './ReduxStore/reducer/ExpenseReducer';
import FilterReducer from './ReduxStore/reducer/FilterReducer'

import {createStore,combineReducers} from 'redux'


const rootReducer=combineReducers({
    expenseReducer:ExpensReducer,
    filterReducer:FilterReducer

}) 



const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
