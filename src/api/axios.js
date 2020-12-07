import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

axios.interceptors.response.use(undefined, function (error) {
  const errObj = {
    error: error.response ? error.response.data : 'Sikertelen kapcsolódás',
    status: error.response ? error.response.status : 503,
  };

  return errObj;
});

export const covidInstance = axios.create({
  baseURL: 'https://api.covid19api.com',
});

export const ipInstance = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json',
});

export const locationInstance = axios.create({
  baseURL: 'http://ip-api.com/json',
});
