import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://217.151.230.35/'
});

export default axiosClient;