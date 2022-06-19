import React from 'react';
import Image from 'next/image';
import styles from '../styles/22fixcorner.module.css';

export default function ArrowButton() {
  return (
    <div>
      <div className={styles.container}>
        <div
          className={`${styles.container__corner} ${styles['container__corner--tl']}`}
        ></div>
        <div
          className={`${styles.container__corner} ${styles['container__corner--tr']}`}
        ></div>
        <div
          className={`${styles.container__corner} ${styles['container__corner--br']}`}
        ></div>
        <div
          className={`${styles.container__corner} ${styles['container__corner--bl']}`}
        ></div>
      </div>
    </div>
  );
}
