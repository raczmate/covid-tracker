import { covidInstance, ipInstance, locationInstance } from "./axios";

export const getSummary = async () => {
  const response = await covidInstance.get("/summary");
  const { Countries, Global, Date } = response.data;

  return { Countries, Global, Date };
};

export const getCountry = async () => {
  const response = await (await ipInstance.get()).data;
  const { ip } = response;

  const locResponse = await locationInstance.get(`/${ip}`);
  const { country } = locResponse.data;
  return { country };
};
