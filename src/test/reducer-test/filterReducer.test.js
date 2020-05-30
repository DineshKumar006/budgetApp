import FilterReducer from '../../ReduxStore/reducer/FilterReducer'
import moment from 'moment'



test('Default filter reducer test',()=>{

    const result=FilterReducer(undefined,{type:'@@INIT'})

    expect(result).toEqual({
        text:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sortBy:'date', 
        amountSearch:NaN    

    })

});


test('sort by amount',()=>{
    const state=FilterReducer(undefined,{type:'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount')

});

test('sort by date',()=>{

    const initialState={

        text:'',
        startDate:undefined,
        endDate: undefined,
        sortBy:'amount', 
        amountSearch:undefined
    
        }

const action={type:'SORT_BY_DATE'}
    const state=FilterReducer(initialState,action);
    expect(state.sortBy).toBe('date')
})


test('Filter by Name ',()=>{

    const initialState={
        text:'text filter',
        startDate:undefined,
        endDate: undefined,
        sortBy:'amount', 
        amountSearch:undefined
        }

        const text='text filter';
        const action={
            type:'FILTER_EXPENSES_BY_NAME',
            text:text
        }

    const state=FilterReducer(undefined,action)
    expect(state.text).toBe(text)
})

test('setStart date Reducer',()=>{

const  startDate=moment()
    const action={
        type:'SORT_BY_STARTDATE',
        startDate
    }

    const state=FilterReducer(undefined,action);

    expect(state.startDate).toEqual(startDate)
});

test('setEnd Date Reducer',()=>{
    const endDate=moment();
    const action={
        type:'SORT_BY_ENDDATE',
        endDate
    }
    const state=FilterReducer(undefined,action)
    expect(state.endDate).toEqual(endDate)
});

test('',()=>{
const amountSearch=2000
    const action={
        type:'SEARCH_BY_AMOUNT',
        amountSearch
    }

    const state=FilterReducer(undefined,action);

expect(state.amountSearch).toEqual(amountSearch)

})