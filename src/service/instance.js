import axios from 'axios';

const apiURL = import.meta.env.VITE_REACT_APP_DEV_BACKEND_URL;

const instance = axios.create({
    baseURL: apiURL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
