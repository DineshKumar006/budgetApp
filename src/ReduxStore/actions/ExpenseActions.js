import * as actionType from './All_Actions';
import {v4 as uuidv4} from 'uuid'
import axios from '../../axios/axios'

export const asyncaddExpenses=(payload={},dbID)=>{
    return{
        type:actionType.ADDEXPENSE,
        expenses:payload,
        dbID:dbID

            }  
};

export const addExpenses=(payload={})=>{
    const {amount=0,description='test', createdAt=1000,note='robo'}=payload
    const expenses={ 
         amount:amount,
         id:uuidv4(),
         description,
         createdAt,
         note
     }

    return (dispatch)=>{
       
       return axios.post('/expenses.json',expenses).then(res=>{

                dispatch(asyncaddExpenses(expenses,res.data.name));
        }).catch(error=>{
            console.log(error);
        })
    }
}





export const asyncRemoveExpenses=(id)=>{
    // console.log(id)
    return{
        type:actionType.REMOVE_EXPENSES,
        id:id
    }
}

export const removeExpenses=(id,dbID)=>{
    console.log(dbID)
    return dispatch=>{
       return axios.delete(`/expenses/${dbID}.json`).then(res=>{
            dispatch(asyncRemoveExpenses(id))
        })
    }
}

export const AsynceditExpenses=(id,updateData)=>{
    return{
        type:actionType.EDIT_EXPENSES,
        id,
        updateData
    }
}

export const editExpenses=(id,updateData,dbID)=>{
    return dispatch=>{
     return   axios.patch(`/expenses/${dbID}.json`,updateData).then(res=>{
            dispatch(AsynceditExpenses(id,updateData));
        })  
    }
}


