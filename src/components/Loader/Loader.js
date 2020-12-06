import React from 'react';
import styles from './Loader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in';

function Loader() {
  return (
    <div className={styles['fullscreen-container']}>
      <FadeIn>
        <div className={styles['item-container']}>
          <FontAwesomeIcon
            icon={faVirus}
            size="6x"
            spin
            className={styles.loadIcon}
          />
          <p className={styles.loadText}>
            Adatok szinkronizálása folyamatban...
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export default Loader;
