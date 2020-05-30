import * as actionType from './All_Actions';
import {v4 as uuidv4} from 'uuid'

export const addExpenses=(payload={})=>{

    const {amount=0,description='test', createdAt=1000,note='robo'}=payload

    // console.log(uuidv4())
    return{
        type:actionType.ADDEXPENSE,
       
        expenses:{ 
                    amount:amount,
                    id:uuidv4(),
                    description,
                    createdAt,
                    note
                }
            }
}


export const removeExpenses=(id)=>{
    console.log(id)
    return{
        type:actionType.REMOVE_EXPENSES,
        id:id
    }
}




export const editExpenses=(id,updateData)=>{
    return{
        type:actionType.EDIT_EXPENSES,
        id,
        updateData
    }
}



