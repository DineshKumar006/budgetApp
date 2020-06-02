import React, { Component } from 'react';
import './App.css';

import * as actions from './ReduxStore/actions/ExpenseActions'
import {visibleData} from './selector/visibleData'
import {connect} from 'react-redux';

import {ReqAuth} from './hoc/HOC'
import Routes from './components/Routes/route';

import axios from './axios/axios'

import database from './firebase/firebase'

import SimpleTable from './utils/Table'

class App extends Component {

  data={
      item:'pizza',
      amout:300
  }

  componentDidMount(){
  // database.ref('/newData').set({
  //   name:'zeee',
  //   age:23
  // }).then(()=>{
  //   console.log('inserted!')
  // })

  // database.ref('/newData/name').remove().then(()=>{
  //   console.log('removed')
  // })
  //   const expenses={
     
  //      name:'milk',
  //      id:'123'
     
  //   }


  // database.ref('/newData').update({
  //   name:'ranger',
  //   job:'Software developer'
  // })


  // database.ref('/expenses').once('value').then(snapshot=>{
  //   const val=snapshot.val();
  //   console.log(val);

  // }).catch(e=>{
  //   console.log(e)
  // })

  // database.ref('/expenses').on('value',(snapshot)=>{
  //   const val=snapshot.val();
  //   console.log(val);

  // })


    

  }

  
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
