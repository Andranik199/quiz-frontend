import axios from 'axios';




export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})
