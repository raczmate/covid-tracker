import React from 'react';
import { useStats } from '../../context/statContext';
import { Dropdown } from 'react-bootstrap';
import { CountryCards } from '../../components';
import { Row, Col } from 'react-bootstrap';

const CountrySelector = ({ addCountry, removeCountry, selected }) => {
  const { Countries } = useStats();
  Countries.map((country) => country.Country);

  return (
    <>
      <Row>
        <Col xs={12} md={6} className="mt-2 mx-auto">
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
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
                  styles={{
                    color: selected.includes(country) ? 'red' : 'none',
                  }}
                >
                  {country.Country}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {selected.map((country) => (
        <CountryCards country={country} key={country.Country} />
      ))}
    </>
  );
};
export default CountrySelector;
