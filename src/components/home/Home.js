import React,{Component} from 'react'
 import ExpenseList from '../expenses/expensesList';
import FilterExpenses from '../expenses/FilterExpenses';
import {connect} from 'react-redux'
import * as FetchActions from '../../ReduxStore/actions/FetchExpenseAction';


    class Home extends Component{
   
        componentDidMount(){
            this.props.FetchExpenses();

        }
        render(){

console.log(this.props.filterData.textFocus)
         console.log('home page')
            return(
                <React.Fragment>
                    <p>This is home page</p>
                <FilterExpenses amountFocus={this.props.filterData.amountFocus}
                textFocus={this.props.filterData.textFocus}/>
                <ExpenseList expensesData={this.props.expensesData.expenses} 
                filterData={this.props.filterData}
                dataFromDB={this.props.fetchExpensesReducer }
                
                />
        
            
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
        FetchExpenses:()=>dispatch(FetchActions.fetchDataFomDB()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)