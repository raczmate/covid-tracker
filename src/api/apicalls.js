import { covidInstance, locationInstance } from './axios';

export const getSummary = async () => {
  const response = await covidInstance.get('/summary');
  const { Countries, Global, Date } = response.data;

  return { Countries, Global, Date };
};

export const getCountry = async () => {
  const locResponse = await locationInstance.get();
  const { country } = locResponse.data;
  return { country };
};
