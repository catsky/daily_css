import React from 'react';
import Image from 'next/image';
import styles from '../styles/8closebutton.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.button}>
        <div
          className={`${styles.button__line} ${styles['button__line--first']}`}
        ></div>
        <div
          className={`${styles.button__line} ${styles['button__line--second']}`}
        ></div>
      </div>
    </div>
  );
}
