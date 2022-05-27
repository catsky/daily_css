import React from 'react';
import Image from 'next/image';
import styles from '../styles/10concave_corners.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles['concave-corners']}>
        <div
          className={`${styles['concave-corners__corner']} ${styles['concave-corners__corner--tl']}`}
        ></div>
        <div
          className={`${styles['concave-corners__corner']} ${styles['concave-corners__corner--tr']}`}
        ></div>
        <div
          className={`${styles['concave-corners__corner']} ${styles['concave-corners__corner--bl']}`}
        ></div>
        <div
          className={`${styles['concave-corners__corner']} ${styles['concave-corners__corner--br']}`}
        ></div>
      </div>
    </div>
  );
}
