import React from 'react';
import { Link } from 'react-router-dom';
import { CountrySelector } from '../../../components';
import { countriesList, countryReducer } from '../../../reducer/countryReducer';
import { useReducer } from 'react';
const SecondPage = () => {
  const [selected, dispatch] = useReducer(countryReducer, countriesList);

  return (
    <div>
      <Link to="/">Vissza a főoldalra</Link>
      <CountrySelector
        addCountry={(country) => dispatch({ type: 'ADD', payload: country })}
        removeCountry={(country) =>
          dispatch({ type: 'REMOVE', payload: country })
        }
      />
    </div>
  );
};
export default SecondPage;
