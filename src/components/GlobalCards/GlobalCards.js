import React from 'react';
import { DataCard } from '../index';
import { Row, Col } from 'react-bootstrap';
import { useStats } from '../../context/statContext';
import { numFormatter } from '../../utils';
export function GlobalCards() {
  const { Global } = useStats();
  return (
    <>
      <h1 className="display-4 text-center text-md-left">Globális adatok</h1>
      <Row>
        <Col lg={4} sm={12}>
          <DataCard
            data={{
              title: 'Új esetek száma',
              bodyColor: 'red',
              body: numFormatter(Global.NewConfirmed) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Confirmed',
              bgImage:
                'https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg',
              withShadow: true,
            }}
          />
        </Col>
        <Col lg={4} sm={12}>
          <DataCard
            data={{
              title: 'Új elhalálozások száma',
              bodyColor: 'red',
              body: numFormatter(Global.NewDeaths) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Deaths',
              bgImage:
                'https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg',
              withShadow: true,
            }}
          />
        </Col>
        <Col lg={4} sm={12}>
          <DataCard
            data={{
              title: 'Új gyógyultak száma',
              bodyColor: 'green',
              body: numFormatter(Global.NewRecovered) + ' fő',
              subtitle: 'Az elmúlt 24 órában',
              icon: 'Recovered',
              bgImage:
                'https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg',
              withShadow: true,
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default GlobalCards;
