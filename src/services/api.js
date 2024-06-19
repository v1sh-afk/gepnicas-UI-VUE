import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',  
    headers: {
        'Content-type': 'application/json',
    },
});

export default {
    fetchData() {
        return apiClient.get('/api/data');
    },
};
