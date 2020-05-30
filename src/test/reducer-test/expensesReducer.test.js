import ExpensesReducer  from '../../ReduxStore/reducer/ExpenseReducer';
import expenses from '../fixtures/expenses';



test('Default exepense validator',()=>{
    const state=ExpensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({expenses:[]})
})


test('Remove expense test',()=>{
    const actions={
        type:'REMOVE_EXPENSES',
        id:expenses[1].id
    }

    const expense={
        expenses:expenses
    }
    const state=ExpensesReducer(expense,actions);

    expect(state).toEqual({
        expenses:[expenses[0],expenses[2]]
    })
})



test('Remove expense test if id not provide',()=>{
    const actions={
        type:'REMOVE_EXPENSES',
        id:'1234'
    }
    const expense={
        expenses:expenses
    }
    const state=ExpensesReducer(expense,actions);

    expect(state).toEqual({
        expenses:expenses
    })
})



test('Add expenses',()=>{
    const Newexpense={
            id:'5',
            description:'honey',
            amount:450,
            createdAt:0,
            note:''
        
    }
    const actions={
        type:'ADDEXPENSE',
        expenses:Newexpense
    }
// console.log(expenses)

const expense={
    expenses:expenses
}
    const state=ExpensesReducer(expense,actions)

    expect(state).toEqual({
        expenses:[...expenses,Newexpense]
    })

})


//Edit expense


test('Edit expende validation',()=>{
  
     const   amount=180
       const updateData={
        amount:180
       }
    const actions={
        type:'EDIT_EXPENSES',
        id:'2',
        updateData
    }

    const expense={
        expenses:expenses
    }

    const state=ExpensesReducer(expense,actions)
    expect(state.expenses[1].amount).toBe(amount)
})


test('Should not Edit expende if id not found validation',()=>{
  
    const   amount=180
      const updateData={
       amount:180
      }
   const actions={
       type:'EDIT_EXPENSES',
       id:'-12344',
       updateData
   }

   const expense={
       expenses:expenses
   }

   const state=ExpensesReducer(expense,actions)
   expect(state).toEqual({
       expenses:expenses
   })
})
//