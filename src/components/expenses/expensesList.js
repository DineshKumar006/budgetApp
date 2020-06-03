import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as ExpenseActions from '../../ReduxStore/actions/ExpenseActions'
import {visibleData} from '../../selector/visibleData'
import Table from '../../utils/Table'



//  const ExpenseList =(props)=>{

class ExpenseList extends Component{
state={
    data:undefined,
    isMount:false,
    expensesStatus:'No expenses added yet!'

}

// componentDidMount(){
//      this.props.FetchExpenses();
// }
render(){
   console.log(this.props.dataFromDB.expenses)
// let data=null,Total=0

// if(this.props.expensesData.length>0){
//     data=visibleData(this.props.expensesData,this.props.filterData)
//     data.map(ele=>{
//         return Total=Total+ele.amount
//     })
// }

let dbData=null,DB_Total=0
if(this.props.dataFromDB.expenses.length>0){
    dbData=visibleData(this.props.dataFromDB.expenses,this.props.filterData);

    dbData.map(ele=>{
        return DB_Total=DB_Total+ele.amount
    })
}
console.log(this.props.dataFromDB.expenses.length)

    return(
    <React.Fragment>
        <hr></hr>

        {/* <ul>
            {data!==null? <div>
            <h4>viewing {data.length} expenses. Total ${Total}</h4>
                {data.map(curr=>{
                return (<li key={curr.id}>
                  <Link to={`/edit/${curr.id}`}> {curr.description} </Link> 
                  {numeral(curr.amount).format('$0,0.00')} - {moment(curr.createdAt).format('MMMM Do, YYYY')}
                    <button onClick={()=>this.props.removeExpenses(curr.id,curr.dbID)}>Delete</button>

                </li>)
                })}
            </div>:'No Expenses added yet'}
        </ul> */}


        <hr/>
        <p>From DB</p>
           

              <div>
              {dbData!==null? (<div><Table dbData={dbData} 
              removeExpenses={this.props.removeExpenses} DB_Total={DB_Total}/></div> ): <h3>No expenses Added yet!</h3>}

              </div>
    </React.Fragment >
)

        }
    }

const mapStateToProps=(state)=>{
    return{
        expensesData1:state.expenseReducer,
        // filterData:state.filterReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeExpenses:(id,dbID)=>dispatch(ExpenseActions.removeExpenses(id,dbID)),


    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(ExpenseList);