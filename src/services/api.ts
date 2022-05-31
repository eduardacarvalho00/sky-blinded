import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?',
    params: {
        key: '29314fdd',
        format: 'json-cors',
    }
});
export default api;