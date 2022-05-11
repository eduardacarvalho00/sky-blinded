import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?array_limit=5&fields=only_results,city_name,weekday,description,humidity,sunset,temp,forecast,max,min,date&key=3833c132'
});
