import React from 'react';
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DataCard.module.css';

import {
  faSkullCrossbones,
  faVirusSlash,
  faHeadSideVirus,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

function getIcon(icon) {
  switch (icon) {
    case 'Confirmed': {
      return faHeadSideVirus;
    }
    case 'Deaths': {
      return faSkullCrossbones;
    }
    case 'Recovered': {
      return faVirusSlash;
    }
    default:
      return faQuestion;
  }
}

DataCard.prototype = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string,
    bodyFontSize: PropTypes.string,
    bodyColor: PropTypes.string,
    bgImage: PropTypes.string,
    icon: PropTypes.string,
    padding: PropTypes.string,
    topMargin: PropTypes.string,
    withShadow: PropTypes.bool,
    Component: PropTypes.element,
  }),
};

function DataCard({ data }) {
  return (
    <Card
      style={{
        padding: data.padding ?? '0.5rem',
        borderRadius: '0.5rem',
        marginTop: data.topMargin ?? '2rem',
        backgroundImage: data.bgImage ? `url(${data.bgImage}` : 'none',
        backgroundSize: 'contain',
        marginBottom: data.bottomMargin ?? '0.5rem',
      }}
      className={`${data.withShadow ? styles['card-shadow'] : ''} ${
        styles['covid-card']
      }`}
    >
      {!data.Component && (
        <Card.Body>
          {data.title && <Card.Title>{data.title}</Card.Title>}

          <Card.Subtitle
            className="text-muted"
            style={{
              marginBottom: '0.5rem',
              textShadow: '0 0 2px white',
            }}
          >
            {data.subtitle}
          </Card.Subtitle>
          <Card.Text
            style={{
              color: data.bodyColor ? data.bodyColor : data.black,
              fontWeight: '500',
              float: data.icon ? 'left' : 'none',
              fontSize: data.bodyFontSize ?? '1.3rem',
              textShadow: '0 0 2px white',
            }}
          >
            {data.body}
          </Card.Text>
          {data.icon && (
            <Card.Text style={{ float: 'right', textShadow: '0 0 2px white' }}>
              <FontAwesomeIcon
                icon={getIcon(data.icon)}
                style={{ color: data.bodyColor ?? 'black' }}
                size="4x"
              />
            </Card.Text>
          )}
        </Card.Body>
      )}
      {data.Component && <data.Component />}
    </Card>
  );
}

export default DataCard;
