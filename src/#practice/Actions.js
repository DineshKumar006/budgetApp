import * as actionsType from './#All_Actions';



export const increment=({a=1}={})=>{

    console.log(a)
    return{
        type:actionsType.INCREMENT,
        count:a
        
    }
}

export const decrement=()=>{

    return{
        type:actionsType.DECREMENT,

    }

}

export const Reset=()=>{
    return{
        type:actionsType.RESET
    }
}





