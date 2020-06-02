import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'https://budget-app-be952.firebaseio.com'
})


export default axiosInstance