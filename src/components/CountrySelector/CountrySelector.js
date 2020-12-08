import React from 'react';
import { useStats } from '../../context/statContext';
import { Button, Dropdown } from 'react-bootstrap';
import { CountryCards } from '../../components';
import { Row, Col } from 'react-bootstrap';

const CountrySelector = ({
  addCountry,
  removeCountry,
  selected,
  resetCountry,
}) => {
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
              <Dropdown.Item>
                <Button onClick={resetCountry} variant="secondary">
                  Alaphelyzetbe állítás
                </Button>
                <Dropdown.Item></Dropdown.Item>

                <Dropdown.Divider />
              </Dropdown.Item>
              {Countries.map((country) => (
                <Dropdown.Item
                  key={country.Country}
                  onClick={
                    selected.includes(country)
                      ? () => removeCountry(country)
                      : () => addCountry(country)
                  }
                  style={{
                    backgroundColor: selected.includes(country)
                      ? 'orange'
                      : 'white',
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
