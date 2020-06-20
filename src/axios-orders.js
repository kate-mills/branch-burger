import axios from 'axios'

axios.create({
  baseURL: process.env.REACT_APP_AXIOS_ORDERS,
})

console.log('axios', process.env.REACT_APP_AXIOS_ORDERS)
