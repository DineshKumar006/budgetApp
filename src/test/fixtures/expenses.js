
import moment from 'moment';

const expenses=[{
    id:'1',
    description:'rice',
    amount:1200,
    createdAt:0,
    note:''

},
{
    id:'2',
    description:'milk',
    amount:100,
    createdAt:moment(0).subtract(4,'days').valueOf(),
    note:''

},
{
    id:'3',
    description:'curd',
    amount:1000,
    createdAt:moment(0).add(4,'days').valueOf(),
    note:''

}
]

export default expenses