import React from 'react';
import { CountrySelector } from '../../../components';
import { countriesList, countryReducer } from '../../../reducer/countryReducer';
import { useReducer } from 'react';
import { Button } from 'react-bootstrap';
const SecondPage = () => {
  const [selected, dispatch] = useReducer(countryReducer, countriesList);

  return (
    <div>
      <CountrySelector
        addCountry={(country) => dispatch({ type: 'ADD', payload: country })}
        removeCountry={(country) =>
          dispatch({ type: 'REMOVE', payload: country })
        }
        resetCountry={() => dispatch({ type: 'RESET' })}
        selected={selected}
      />
    </div>
  );
};
export default SecondPage;
