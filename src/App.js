import React, { Component } from 'react';
import './App.css';

import * as actions from './ReduxStore/actions/ExpenseActions'
import {visibleData} from './selector/visibleData'
import {connect} from 'react-redux';

import {ReqAuth} from './hoc/HOC'
import Routes from './components/Routes/route'

class App extends Component {
  render() {
     let id=0
     this.props.expensesData.expenses?this.props.expensesData.expenses.map(ele=>{
      // console.log(ele.id)
      id=ele.id
     }) :''
const editData=()=>{
  const updateData={
      amount:99000,
    description:'im dinesh'
}

this.props.editExpenses(id,updateData)
}






if(this.props.expensesData.expenses.length>0){

  const data=visibleData(this.props.expensesData.expenses,this.props.filterData)
  console.log(data)
}

    return (
      <div className="App">
            <Routes/>

                 <ReqAuth isAuth={true} info='this is auth details'/>
          </div>




    );
  }
}


const mapStateToProps=(state)=>{
  return{
    expensesData:state.expenseReducer,
    filterData:state.filterReducer
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addExpenses:(amount)=>dispatch(actions.addExpenses({amount})),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
