import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './Actions'

class App extends Component {



  render() {
      const d={
          name:'dinesh',
          age:20
      }

      const {name='test',age}=d  
      console.log(name)


      const arr=['dinesh',23,1997,'Latha']

      
    const [,,year,l]=arr

    console.log(l)

    return (
      <div className="App">
            

        <button onClick={this.props.onIncremet}> Inc</button>

        <button onClick={this.props.onDecrement}>Dec</button>
        <button onClick={this.props.Reset}>Reset</button>




        {this.props.data.count}

      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{

        data:state.DataReducer

    }
}


const mapDispatchToProps=(dispatch)=>{
    return{

        onIncremet:()=>dispatch(action.increment({a:5})),
        onDecrement:()=>dispatch(action.decrement()),
        Reset:()=>dispatch(action.Reset())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
