import React,{Suspense,Component} from 'react'
 import ExpenseList from '../expenses/expensesList';
import FilterExpenses from '../expenses/FilterExpenses';
import {connect} from 'react-redux'
import axios from '../../axios/axios'

import * as FetchActions from '../../ReduxStore/actions/FetchExpenseAction'
// const ExpenseList=React.lazy(()=>import('../expenses/expensesList'))


    class Home extends Component{
   
        componentDidMount(){
    
        this.props.FetchExpenses()

        }
        render(){
            // console.log(this.state.expenses)
            return(
                <React.Fragment>
                    <p>This is home page</p>
                <FilterExpenses/>
                <ExpenseList expensesData={this.props.expensesData.expenses} 
                filterData={this.props.filterData}
                dataFromDB={this.props.fetchExpensesReducer}/>
        
            
                </React.Fragment>
            )
        }
    }
  


const mapStateToProps=(state)=>{
        return{
            expensesData:state.expenseReducer,
            filterData:state.filterReducer,
            fetchExpensesReducer:state.fetchExpensesReducer
        }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        FetchExpenses:()=>dispatch(FetchActions.fetchDataFomDB())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)