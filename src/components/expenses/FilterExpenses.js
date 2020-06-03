import React,{Component} from 'react';
import * as FilterActions from '../../ReduxStore/actions/FilterActions'
import * as ExpensesActions from '../../ReduxStore/actions/ExpenseActions'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';



class FilterExpenses extends Component{

    constructor(){
        super()
        this.state={
            // startDate:moment(),
            // endDate:moment(),
            calenderFocused:null,
            
        }
    }

    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused:calenderFocused}))
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
     changeHandler=(e)=>{

        const value=e.target.value;
        if(this.props.expensesDataFromDB.expenses.length>0){
            this.props.filterByName(value.toLowerCase())   
        }
    }
     amountChangeHandler=(e)=>{
        const amount= e.target.value;
        if(this.props.expensesDataFromDB.expenses.length>0){
            this.props.filterByAmount(parseInt(amount))
        }
    }
    render(){
        




const sortHandler=(event)=>{
    //  console.log(event.target.value)
    if(this.props.expensesData.expenses.length>0 || this.props.expensesDataFromDB.expenses.length>0){
        if(event.target.value==='amount'){
            this.props.sortByAmount()
        }else if(event.target.value==='date'){
            this.props.sortByDate()
        }

    }

}

console.log(this.props.amountFocus,this.props.textFocus)
        return(
            <div>
               
                <label>FilterExpenses</label>
               
                <input type='number' placeholder='Amountsearch'  autoFocus={this.props.amountFocus}
                 onChange={this.amountChangeHandler} value={this.props.filterData.amountSearch.toString()}/>

                <input type='text' placeholder="Enter Filter" autoFocus={this.props.textFocus}
                 onChange={this.changeHandler}  value={this.props.filterData.text}/>

                <DateRangePicker
                startDate={this.props.filterData.startDate}
                startDateId="1"
                endDate={this.props.filterData.endDate}
                endDateId="2"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1} //limit the calander view to one
                isOutsideRange={()=>false} //we  can go in past
                showClearDates={true}

                    />


<div>
    <select onChange={sortHandler} value={this.props.filterData.sortBy}>
        <option value="date">date</option>
        <option value="amount">amount</option>
    </select>

</div>

            <h4>Filter data</h4>
            
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        expensesData:state.expenseReducer,
        filterData:state.filterReducer,
        expensesDataFromDB:state.fetchExpensesReducer
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        filterByName:(value)=>dispatch(FilterActions.filterByName(value)),
        sortByAmount:()=>dispatch(FilterActions.sortByAmount()),
        sortByDate:()=>dispatch(FilterActions.sortByDate()),
        removeExpenses:(id)=>dispatch(ExpensesActions.removeExpenses(id)),
        filterByAmount:(amount)=>dispatch(FilterActions.filterByAmount(amount)),
        setStartDate:(startDate)=>dispatch(FilterActions.setStartDate(startDate)),
        setEndDate:(endDate)=>dispatch(FilterActions.setEndDate(endDate))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterExpenses)

