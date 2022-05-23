import React from 'react';
import Image from 'next/image';
import styles from '../styles/6card.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.card}>
        <div className={styles.card__cover}>Welcome to the world</div>
        <div className={styles.card__content}>content</div>
      </div>
    </div>
  );
}
