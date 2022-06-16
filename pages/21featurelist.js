import React from 'react';
import Image from 'next/image';
import styles from '../styles/21featurelist.module.css';

export default function ArrowButton() {
  return (
    <div style={{ margin: '10px' }}>
      <div className={styles.container}>
        <div className={styles.container__image}></div>
        <div className={styles.container__feature}>
          this is great this is greatthis is great this is great
        </div>
      </div>
      <div className={styles.container_reverse}>
        <div className={styles.container__image}></div>
        <div className={styles.container__feature}>
          this is great this is greatthis is great this is greatthis is great
          this is greatthis is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is greatthis is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is greatthis is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is great this is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is greatthis is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is greatthis is great this is greatthis is great this is
          greatthis is great this is greatthis is great this is greatthis is
          great this is greatthis is great this is greatthis is great this is
          greatthis is great this is great
        </div>
      </div>
    </div>
  );
}
