import { filterByAmount,filterByName,sortByAmount,sortByDate,setStartDate,setEndDate } from "../../ReduxStore/actions/FilterActions";
import moment from 'moment'


test('filterByName validation',()=>{
    const result=filterByName('rice')

    expect(result).toEqual({
        type:'FILTER_EXPENSES_BY_NAME',
        text:'rice'
    })
});

test('filterByName validation without text',()=>{
    const result=filterByName()

    expect(result).toEqual({
        type:'FILTER_EXPENSES_BY_NAME',
        text:'robo'
    })
});


test('filterByAmount validation',()=>{
    const result=filterByAmount(1000);

    expect(result).toEqual({
        type:'SEARCH_BY_AMOUNT',
        amountSearch:1000
    })
});



test('sortByAmount', ()=>{
    const result=sortByAmount()

    expect(result).toEqual({
        type:"SORT_BY_AMOUNT"
    })
});

test('Sort by date',()=>{
    const result=sortByDate();
    expect(result).toEqual({
        type:'SORT_BY_DATE'
    })
});


test('setStartDate validation',()=>{
    const result=setStartDate(moment(0));

    expect(result).toEqual({
        type:'SORT_BY_STARTDATE',
        startDate:moment(0)
    })
});

test('setEnddate validation',()=>{
    const result=setEndDate(moment(0));
    expect(result).toEqual({
        type:'SORT_BY_ENDDATE',
        endDate:moment(0)
    })
});