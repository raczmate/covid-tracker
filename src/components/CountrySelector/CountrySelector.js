import React from 'react';
import { useStats } from '../../context/statContext';
import { Dropdown } from 'react-bootstrap';
const CountrySelector = ({ addCountry, removeCountry, selected }) => {
  const { Countries } = useStats();
  Countries.map((country) => country.Country);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Ország kiválasztása
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Countries.map((country) => (
            <Dropdown.Item
              key={country.Country}
              onClick={
                selected.includes(country)
                  ? () => removeCountry(country)
                  : () => addCountry(country)
              }
            >
              {country.Country}
            </Dropdown.Item>
          ))}

          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default CountrySelector;
