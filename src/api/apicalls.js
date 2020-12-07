import { covidInstance, locationInstance } from './axios';

export const getSummary = async () => {
  const response = await covidInstance.get('/summary');
  const { Countries, Global, Date } = response.data;

  return { Countries, Global, Date };
};

export const getCountry = async () => {
  const API_KEY = 'a30258dbabc97253513d724c2ace826f';
  const locResponse = await locationInstance.get(
    `/check?access_key=${API_KEY}`
  );
  const { country_name: country } = locResponse.data;
  return { country };
};
