import React from 'react';
import styles from '../styles/2arrow_buttons.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <button className={styles.button}>
        <div
          className={`${styles.button__arrow} ${styles['button__arrow--right']}`}
        ></div>
      </button>
      <button className={styles.button}>
        <div
          className={`${styles.button__arrow} ${styles['button__arrow--down']}`}
        ></div>
      </button>
      <button className={styles.button}>
        <div
          className={`${styles.button__arrow} ${styles['button__arrow--up']}`}
        ></div>
      </button>
      <button className={styles.button}>
        <div
          className={`${styles.button__arrow} ${styles['button__arrow--left']}`}
        ></div>
      </button>
    </div>
  );
}
