import * as Actions  from '../actions/All_Actions'
const initialState={
    expenses:[]
}

const Reducer=(oldstate=initialState,actions)=>{

    switch(actions.type){
        case Actions.FETCH_DATA_FROM_DB:
            const updatedState={
                expenses:actions.payload,
            }
            return{
            ...oldstate,
            ...updatedState
        }

        default :return oldstate
    }

}


export default Reducer