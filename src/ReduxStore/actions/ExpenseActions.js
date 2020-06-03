import * as actionType from './All_Actions';
import {v4 as uuidv4} from 'uuid'
import axios from '../../axios/axios'

export const asyncaddExpenses=(payload={})=>{
    return{
        type:actionType.ADDEXPENSE,
        expenses:payload
       
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
    return (dispatch,getState)=>{
       console.log(getState().AuthReducer.uid)
       const uid=getState().AuthReducer.uid
       return axios.post(`/expenses/users/${uid}.json`,expenses).then(res=>{
                const exp={
                        ...expenses,
                        dbID:res.data.name
                }
// console.log(exp)
                dispatch(asyncaddExpenses(exp));
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
    // console.log(dbID)
    return (dispatch,getState)=>{
        const uid=getState().AuthReducer.uid
       return axios.delete(`/expenses/users/${uid}/${dbID}.json`).then(res=>{
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

    return (dispatch,getState)=>{
        const uid=getState().AuthReducer.uid

     return   axios.patch(`/expenses/users/${uid}/${dbID}.json`,updateData).then(res=>{
            dispatch(AsynceditExpenses(id,updateData));
        })  
    }
}



