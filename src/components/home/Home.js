import React from 'react'
import ExpenseList from '../expenses/expensesList';
import FilterExpenses from '../expenses/FilterExpenses';
import {connect} from 'react-redux'

 const Home=(props)=>{
    return(
        <div>
            <p>This is home page</p>
        <FilterExpenses/>
        <ExpenseList expensesData={props.expensesData.expenses} filterData={props.filterData}/>

        </div>
    )
}

const mapStateToProps=(state)=>{
        return{
            expensesData:state.expenseReducer,
            filterData:state.filterReducer
        }
}

const mapDispatchToProps=(dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)