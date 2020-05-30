

import * as actionsType from './#All_Actions';


const initialState={
    count:0
}

const reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case actionsType.INCREMENT:return{
            ...oldstate,
            count:oldstate.count+actions.count
        }
        case actionsType.DECREMENT:return{
            ...oldstate,
            count:oldstate.count-1
        }
        case actionsType.RESET:return{
                ...oldstate,
                count:0
            }

        default : return oldstate
}

// return oldstate
}

export default reducer
