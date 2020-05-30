
import React,{Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
// import * as ExpensesActions from '../../ReduxStore/actions/ExpenseActions'
import {connect} from 'react-redux'


class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            amount: props.EditexpenseData?(props.EditexpenseData.amount).toString():'',
            description:props.EditexpenseData?props.EditexpenseData.description:'',
            createdAt:props.EditexpenseData?moment(props.EditexpenseData.createdAt): moment(),  
            note:props.EditexpenseData?props.EditexpenseData.note:'',
            error:'',
            calenderFocused:false,
        }
    }
  
    submitHandler=(e)=>{
        e.preventDefault();
            let amount=e.target.elements.amount.value;
            const description=e.target.elements.description.value;
            const note=e.target.elements.note.value
            const createdAt=this.state.createdAt.valueOf()
            if(!amount||!description){
                this.setState({error:'Provide the Amount and Description'})
            }else{

                this.props.submitExpenses({
                    amount:parseFloat(amount),
                    description:description.toLowerCase(),
                    createdAt:createdAt,
                    note:note
                })
                this.setState({error:''})
            }
        
    }

    changeHandler=(e)=>{
        const amount=e.target.value
        if(!amount || amount.match(/^\d{0,}(\.\d{0,2})?$/)){
        this.setState({amount:amount})
        }
    }
    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused:focused}))
    }
    DescriptionchangeHadler=(e)=>{
        const description=e.target.value
        this.setState({description:description})
    }
    textChangeHandler=(e)=>{
        const text=e.target.vlaue
        this.setState({note:text})
    }

    onDateChange=(createdAt)=>{
            this.setState(()=>({createdAt:createdAt}))
    }
    render(){

console.log(this.props)
        return(
            <div>
                <p>{this.props.error}</p>
                <form onSubmit={this.submitHandler}>

                <input type='text' name="description" placeholder="Description" 
                autoFocus value={this.state.description} onChange={this.DescriptionchangeHadler}/>

                <input type='text' name="amount" placeholder="Enter Expense Amount" 
                        value={this.state.amount} onChange={this.changeHandler}/>
                        
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1} //limit the calander view to one
                    isOutsideRange={()=>false} //we  can go in past
                    />
                    <textarea placeholder="Add note for expenses (Optional)" name="note"
                        onChange={this.textChangeHandler} value={this.state.note} >

                        </textarea>

                        <button>Submit</button>
                    </form>
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
        // addExpenses:(amount,description,createdAt,note)=>dispatch(ExpensesActions.addExpenses({amount,description,createdAt,note}))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form)


