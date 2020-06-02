import {removeExpenses,editExpenses,addExpenses} from '../../ReduxStore/actions/ExpenseActions'
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createmockStore=mockStore([thunk])

test('remove action validation',()=>{
    const id='123abc'
    const dbID='123abc'
    const result=removeExpenses(id);

    const store=createmockStore({});
    store.dispatch(removeExpenses(id,dbID)).then(()=>{
        const action=store.getActions()

        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSES',
             id:'123abc',
            //  dbID:'123abc'
        })
    })
})



test('Edit expense validation',()=>{
   const id="123abc";
   const dbID="-mkh2"
  const  updateData={
      note:'newUpdate'
  }

  const store=createmockStore({});
  store.dispatch(editExpenses(id,updateData,dbID)).then(()=>{
    const action=store.getActions();
    expect(action[0]).toEqual({
        type:'EDIT_EXPENSES',
        id:'123abc',
        updateData:{
           note:'newUpdate'
        },
    })
  });


})



test('Add expenses validation',(done)=>{
    const payload={
        description:'rent',
        createdAt:1000,
        note:'monthly rent',
        amount:2000,
       
    }
    const store=createmockStore({});
    store.dispatch(addExpenses(payload)).then(()=>{
        const action=store.getActions();
        expect(action[0]).toEqual({
            type:'ADDEXPENSE',
            expenses:{
                description:'rent',
                createdAt:1000,
                note:'monthly rent',
                amount:2000,
                id:expect.any(String),
                
            },
            dbID:expect.any(String),

        })
    done()
    })
})


test('Add Expense validation without any data',()=>{
    const payload={
        
    }
    const store=createmockStore({});
    store.dispatch(addExpenses(payload)).then(()=>{
        const action=store.getActions();
        expect(action[0]).toEqual({
            type:'ADDEXPENSE',
            expenses:{
                id:expect.any(String),
                amount:0,
                createdAt:1000,
                description:"test",
                note:"robo"
                
            },
            dbID:expect.any(String)
        })
    })

  
})