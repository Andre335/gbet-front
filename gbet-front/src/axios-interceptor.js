import axios from 'axios';
import history from './util/history.js';

axios.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null

    if (status === 401) {
        history.push("/Login");
    }

    return Promise.reject(error);
});
