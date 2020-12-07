import React from 'react';
import { useStats } from '../../context/statContext';
import { useReducer } from 'react';
const CountrySelector = ({ addCountry, removeCountry }) => {
  const { Countries } = useStats();
  Countries.map((country) => country.Country);

  return <></>;
};
export default CountrySelector;
