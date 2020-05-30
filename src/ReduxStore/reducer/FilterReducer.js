import * as actionType from '../actions/All_Actions';
import moment from 'moment'


const filterState={
  
    text:'',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy:'date', // date or rent
    amountSearch:NaN

}



const FilterReducer=(oldState=filterState,actions)=>{

    switch(actions.type){
        case actionType.FILTER_EXPENSES_BY_NAME:
            return{
                ...oldState,
                text:actions.text
            }

        case actionType.SORT_BY_AMOUNT:
            return{
                ...oldState,
                sortBy:'amount'
            }
            
        case actionType.SORT_BY_DATE:
            return{
                ...oldState,
                sortBy:'date'
            }

         case actionType.SORT_BY_STARTDATE:
             return{
                 ...oldState,
                 startDate:actions.startDate
             } 
             
        case actionType.SORT_BY_ENDDATE:
            return{
                ...oldState,
                 endDate:actions.endDate
            }
        case actionType.SEARCH_BY_AMOUNT:
            return{
                ...oldState,
                amountSearch:actions.amountSearch
            }           

    }
   

    return oldState
}

export default FilterReducer