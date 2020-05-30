import {removeExpenses,editExpenses,addExpenses} from '../../ReduxStore/actions/ExpenseActions'


test('remove action validation',()=>{
    const id='123abc'
    const result=removeExpenses(id);

    expect(result).toEqual({
        type:'REMOVE_EXPENSES',
        id:'123abc'
    })
})

test('Edit expense validation',()=>{
   const id="123abc";
  const  updateData={
      note:'newUpdate'
  }

    const result=editExpenses(id,updateData)
    expect(result).toEqual({
        type:'EDIT_EXPENSES',
        id:'123abc',
        updateData:{
           note:'newUpdate'
        }
    })

})



test('Add expenses validation',()=>{
    const payload={
        description:'rent',
        createdAt:1000,
        note:'monthly rent',
        amount:2000
    }
const result=addExpenses(payload)
    expect(result).toEqual({
        type:'ADDEXPENSE',
        expenses:{
            ...payload,
            id:expect.any(String)
        }
       
    })
})


test('Add Expense validation without any data',()=>{
    const payload={
        
    }
    const result=addExpenses()
    expect(result).toEqual({
        type:'ADDEXPENSE',
        expenses:{
            id:expect.any(String),
            amount:0,
            createdAt:1000,
            description:"test",
            note:"robo"
            
        }
    })
})