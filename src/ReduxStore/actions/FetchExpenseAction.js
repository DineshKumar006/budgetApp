// import * as Actions from './All_Actions';
// import axios from '../../axios/axios';
import database from '../../firebase/firebase'



export const AsyncfetchDataFomDB=(payload)=>{
    return{
        type:'FETCH_DATA_FROM_DB',
        payload, 
    }

}


export const fetchDataFomDB= ()=>{
    return  (dispatch)=>{
        
        database.ref('/expenses').on('value',snapshot=>{
            // console.log(snapshot.val())
            const val=snapshot.val();
            let fetchdata=[];
            for(let key in val){
                fetchdata.push({
                    ...val[key],
                    dbID:key
                });
            };
            dispatch(AsyncfetchDataFomDB(fetchdata))

        })

    }
}