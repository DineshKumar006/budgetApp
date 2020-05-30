
import {visibleData} from '../../selector/visibleData';
import moment from 'moment';

import expenses from '../fixtures/expenses';

// const expenses=[{
//     id:'1',
//     description:'rice',
//     amount:1200,
//     createdAt:0,
//     note:''

// },
// {
//     id:'2',
//     description:'milk',
//     amount:100,
//     createdAt:moment(0).subtract(4,'days').valueOf(),
//     note:''

// },
// {
//     id:'3',
//     description:'curd',
//     amount:1000,
//     createdAt:moment(0).add(4,'days').valueOf(),
//     note:''

// }
// ]

test('visibleData Validation',()=>{
        const filters={
            text:'c',
            startDate:undefined,
            endDate:undefined,
            sortBy:'amount', 
            amountSearch:NaN
        }

    const result=visibleData(expenses,filters)

    expect(result).toEqual([expenses[0],expenses[2]])
});


test('startDate validation',()=>{

    const filters={
        text:'',
        startDate:moment(0),
        endDate:undefined,
        sortBy:'amount',
        amountSearch:NaN
    }

    const result=visibleData(expenses,filters);

    expect(result).toEqual([expenses[0],expenses[2]])
})


test('endDate validation',()=>{
    const filters={
        text:'',
        startDate:undefined,
        endDate:moment(0).add(2,'days'),
        sortBy:'amount',
        amountSearch:NaN
    }

    const result=visibleData(expenses,filters)

    expect(result).toEqual([expenses[0],expenses[1]])
})



test('sort by amount',()=>{
    const filters={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount',
        amountSearch:NaN
        
    }
    const result=visibleData(expenses,filters);

    expect(result).toEqual([expenses[0],expenses[2],expenses[1]])

})


test('sort by date',()=>{
    const filters={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date',
        amountSearch:NaN
    }
    const result=visibleData(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])

})