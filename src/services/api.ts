import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?format=json-cors&key=29314fdd'
});

export default api;