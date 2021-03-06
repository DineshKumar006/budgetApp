import React from 'react';
import {connect} from 'react-redux';
import Form from '../form/form'
import * as ExpenseActions from '../../ReduxStore/actions/ExpenseActions'
// import {history} from '../../index'

const EditExpense=(props)=>{

    // console.log(props)

   const editHandler=(expenseData)=>{
    //    console.log(expenseData.dbID)
       props.editExpenses(props.match.params.id,expenseData,props.expensesDataFromDB.dbID)

       props.history.push('/dashboard')

    }
    return(
        <div>
            <p>Edit expenses {props.match.params.id}</p>
           <Form EditexpenseData={props.expensesDataFromDB} submitExpenses={(expenseData)=>editHandler(expenseData)} />

        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        expenseData:state.expenseReducer.expenses.find(expense=>{
            return expense.id===props.match.params.id
        }),

        expensesDataFromDB:state.fetchExpensesReducer.expenses.find(expenses=>{
            return expenses.id===props.match.params.id
        })
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        editExpenses:(id,data,dbID)=>dispatch(ExpenseActions.editExpenses(id,data,dbID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense)