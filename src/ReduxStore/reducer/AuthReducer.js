


const Reducer=(oldstate={},actions)=>{
    switch(actions.type){
        case 'Login':return{
            uid:actions.uid
        }

        case 'Logout':
            return{

            }

            default:return oldstate
    }

}


export default Reducer