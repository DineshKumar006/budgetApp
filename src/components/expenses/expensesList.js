import React from 'react';
import {connect} from 'react-redux'
import * as ExpenseActions from '../../ReduxStore/actions/ExpenseActions'
import {visibleData} from '../../selector/visibleData'
import moment from 'moment';
import {Link} from 'react-router-dom'
import numeral from 'numeral'

export const ExpenseList =(props)=>{
console.log(props.expensesData.length)

let data=null,Total=0

if(props.expensesData.length>0){
    // console.log(visibleData(props.expensesData,props.filterData))
    data=visibleData(props.expensesData,props.filterData)

    data.map(ele=>{
        return Total=Total+ele.amount
    })
}

    return(
    <div>
        <hr></hr>

        <ul>
            {data!==null? <div>
            <h4>viewing {data.length} expenses. Total ${Total}</h4>
                {data.map(curr=>{
                return (<li key={curr.id}>
                    
                  <Link to={`/edit/${curr.id}`}> {curr.description} </Link> 
                  {numeral(curr.amount).format('$0,0.00')} - {moment(curr.createdAt).format('MMMM Do, YYYY')}
                    <button onClick={()=>props.removeExpenses(curr.id)}>Delete</button>

                </li>)
                })}
            </div>:'No Expenses added yet'}
        </ul>
    </div>
)
        }

const mapStateToProps=(state)=>{
    return{
        // expensesData1:state.expenseReducer,
        // filterData:state.filterReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeExpenses:(id)=>dispatch(ExpenseActions.removeExpenses(id))

    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(ExpenseList);