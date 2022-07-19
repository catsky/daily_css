import React from 'react';
import styles from '../styles/34pricetable.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <div className={styles.title}>Basic</div>
        <div className={styles.price}>$19.9</div>
        <div className={styles.description}>GOOD TIME</div>
        <button>Buy</button>
      </div>
      <div className={styles.container__column}>
        <div className={styles.title}>Basic</div>
        <div className={styles.price}>$19.9</div>
        <div className={styles.description}>GOOD TIME</div>
        <button>Buy</button>
      </div>
      <div className={styles.container__column}>
        <div className={styles.title}>Basic</div>
        <div className={styles.price}>$19.9</div>
        <div className={styles.description}>GOOD TIME</div>
        <button>Buy</button>
      </div>
    </div>
  );
}
