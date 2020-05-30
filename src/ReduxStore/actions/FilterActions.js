import * as actionType from './All_Actions';

export const filterByName=(text='robo')=>{
    return{
        type:actionType.FILTER_EXPENSES_BY_NAME,
        text
    }
}
export const filterByAmount=(amountSearch)=>{
    return{
        type:actionType.SEARCH_BY_AMOUNT,
        amountSearch
    }
}

export const sortByAmount=()=>{
    return{
        type:actionType.SORT_BY_AMOUNT,
    }
}

export const sortByDate=()=>{
    return{
        type:actionType.SORT_BY_DATE,
    }
}

export const setStartDate=(startDate)=>{
    return{
        type:actionType.SORT_BY_STARTDATE,
        startDate
    }

}

export const setEndDate=(endDate)=>{
    return{
        type:actionType.SORT_BY_ENDDATE,
        endDate
    }
}








