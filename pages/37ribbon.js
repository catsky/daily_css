import React from 'react';
import styles from '../styles/37ribbon.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.container}>
      welcome
      <div
        className={`${styles.container__side} ${styles.container__side__left}`}
      ></div>
      <div
        className={`${styles.container__triangle} ${styles.container__triangle__left}`}
      ></div>
      <div
        className={`${styles.container__triangle} ${styles.container__triangle__right}`}
      ></div>
      <div
        className={`${styles.container__side} ${styles.container__side__right}`}
      ></div>
    </div>
  );
}
