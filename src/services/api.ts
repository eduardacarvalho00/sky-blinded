import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?key=29314fdd'
});

export default api;