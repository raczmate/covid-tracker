import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get('Access-Control-Allow-Origin', '*');
axios.defaults.headers.get[('Access-Control-Allow-Credentials', 'true')];
axios.defaults.headers.get[('Access-Control-Max-Age', '1800')];
axios.defaults.headers.get[('Access-Control-Allow-Headers', 'content-type')];
axios.defaults.headers.get[
  ('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS')
];
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

export const locationInstance = axios.create({
  baseURL: 'https://api.ipify.org',
});
