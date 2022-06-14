import React from 'react';
import Image from 'next/image';
import styles from '../styles/20featurevs.module.css';

export default function ArrowButton() {
  return (
    <div style={{ margin: '10px' }}>
      <div className={styles.container}>
        <div className={styles.container__feature}>Function</div>
        <div className={styles.container__model}>YYY</div>
        <div className={styles.container__model}>ZZZ</div>
        <div className={styles.container__model}>TTT</div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__feature}>Function</div>
        <div className={styles.container__model}>YYY</div>
        <div className={styles.container__model}>ZZZ</div>
        <div className={styles.container__model}>TTT</div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__feature}>Function</div>
        <div className={styles.container__model}>YYY</div>
        <div className={styles.container__model}>ZZZ</div>
        <div className={styles.container__model}>TTT</div>
      </div>
    </div>
  );
}
