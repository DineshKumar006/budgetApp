import * as actionType from '../actions/All_Actions';

const initialState={
    expenses:[]
}

const Expensesreducer=(oldState=initialState,actions)=>{

    switch(actions.type){
       
        case actionType.ADDEXPENSE:
            const updatedExpense=oldState.expenses.concat(actions.expenses)
        return {
            // ...oldState,
            expenses:updatedExpense
        }

        case actionType.REMOVE_EXPENSES:

            const updateExpense=oldState.expenses.filter(ele=>{
                return ele.id!==actions.id
            })
            console.log(updateExpense)
            return{
                ...oldState,
                expenses: updateExpense
            }

        case actionType.EDIT_EXPENSES:
           const data= oldState.expenses.map(ele=>{
                if(ele.id===actions.id){
                    return {
                        ...ele,
                        ...actions.updateData
                    }
                }else{
                    return ele
                }
            })

            return{
                expenses:data
            }
        default: return oldState
    }
}


export default Expensesreducer