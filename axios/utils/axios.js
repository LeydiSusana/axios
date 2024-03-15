import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tuapi.com/api',
});

export default instance;
