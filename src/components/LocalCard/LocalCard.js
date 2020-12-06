import React from 'react';
import { useStats } from '../../context/statContext';
import { CountryCards } from '../index';

export function LocalCards() {
  const { Countries } = useStats();
  const savedCountry = localStorage.getItem('preferredCountry');
  const country = Countries.find((c) => c.Country === savedCountry);
  if (!country) return null;

  return (
    <>
      <h1 className="display-4 text-center text-md-left">Helyi adatok</h1>
      <CountryCards country={country} />
    </>
  );
}

export default LocalCards;
