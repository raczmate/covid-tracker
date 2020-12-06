import React from 'react';
import { DataCard } from '../index';
import { Row, Col } from 'react-bootstrap';
import { numFormatter } from '../../utils';

export function CountryCard({ country }) {
  const code = country.CountryCode.toLowerCase();

  return (
    <>
      <Row>
        <Col lg={4} sm={12}>
          <DataCard
            style={{ marginBottom: '30rem' }}
            data={{
              title: 'Új esetek száma',
              bodyColor: 'red',
              body: numFormatter(country.NewConfirmed) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Confirmed',
              bgImage: `http://www.geonames.org/flags/x/${code}.gif`,
              withShadow: true,
            }}
          />
        </Col>
        <Col lg={4} sm={12}>
          <DataCard
            data={{
              title: 'Új elhalálozások száma',
              bodyColor: 'red',
              body: numFormatter(country.NewDeaths) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Deaths',
              bgImage: `http://www.geonames.org/flags/x/${code}.gif`,
              withShadow: true,
            }}
          />
        </Col>
        <Col lg={4} sm={12}>
          <DataCard
            data={{
              title: 'Új gyógyultak száma',
              bodyColor: 'green',
              body: numFormatter(country.NewRecovered) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Recovered',
              bgImage: `http://www.geonames.org/flags/x/${code}.gif`,
              withShadow: true,
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default CountryCard;
