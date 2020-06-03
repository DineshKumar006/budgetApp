import React, { Component } from 'react';
import './App.css';

import * as actions from './ReduxStore/actions/ExpenseActions'
import {visibleData} from './selector/visibleData'
import {connect} from 'react-redux';

import Routes from './components/Routes/route';

// import Login from './components/login/login'


// import {firebase} from './firebase/firebase'
// import {history} from './index'

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

if(this.props.expensesData.expenses.length>0){

  const data=visibleData(this.props.expensesData.expenses,this.props.filterData)
  console.log(data)
}




    return (
      <div className="App">
          <Routes/> 
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


// firebase.auth().onAuthStateChanged((user)=>{
//   if(user){
//     // renderAuth()
//     console.log(user.email)
//     console.log(user.uid)
//       console.log('Logged-in')
//       if(history.location.pathname==='/'){
//         history.push('/dashboard')
//       }
//   }else{
//     // renderAuth()
//        console.log('logged-out')
//       history.push('/')

//   }
// });


export default connect(mapStateToProps,mapDispatchToProps)(App);
