import React from 'react';
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import {ExpenseList} from '../../components/expenses/expensesList'
 import expenses from '../fixtures/expenses'

 const filterData={
    text:'',
    startDate: undefined,
    endDate:undefined,
    sortBy:'date', 
    amountSearch:NaN   
}


test('expense List test validation',()=>{
    console.log(expenses.length)
    const wrapper=shallow(<ExpenseList expensesData={expenses} filterData={filterData}/>)

    expect(toJSON(wrapper)).toMatchSnapshot()

});


test('expense List for empty data test validation',()=>{
    console.log(expenses.length)
    const wrapper=shallow(<ExpenseList expensesData={[]} filterData={filterData}/>)

    expect(toJSON(wrapper)).toMatchSnapshot()

})