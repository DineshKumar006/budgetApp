import React from 'react';
import {connect} from 'react-redux';
import Form from '../form/form'
import * as ExpenseActions from '../../ReduxStore/actions/ExpenseActions'

const EditExpense=(props)=>{

    console.log(props)

   const editHandler=(expenseData)=>{
       props.editExpenses(props.match.params.id,expenseData)
       props.history.push('/')

    }
    return(
        <div>
            <p>Edit expenses {props.match.params.id}</p>
           <Form EditexpenseData={props.expenseData} submitExpenses={(expenseData)=>editHandler(expenseData)} />

        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        expenseData:state.expenseReducer.expenses.find(expense=>{
            return expense.id===props.match.params.id
        })
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        editExpenses:(id,data)=>dispatch(ExpenseActions.editExpenses(id,data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense)