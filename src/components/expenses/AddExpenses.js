import React,{Component} from 'react';
import * as ExpensesActions from '../../ReduxStore/actions/ExpenseActions';
import {connect} from 'react-redux'
import Form from '../form/form'
import moment from 'moment';


export class AddExpenses extends Component{


    submitExpenses=(value)=>{
       const {amount,description,createdAt,note}=value
        this.props.addExpenses(amount,description,createdAt,note)
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <p>Add expenses page</p>
                <hr></hr>
                <label>addExpenses</label>
            
                <Form submitExpenses={(value)=>this.submitExpenses(value)}/>

            </div>
        )
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
        addExpenses:(amount,description,createdAt,note)=>dispatch(ExpensesActions.addExpenses({amount,description,createdAt,note}))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddExpenses)

