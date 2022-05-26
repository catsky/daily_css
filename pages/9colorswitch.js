import React from 'react';
import Image from 'next/image';
import styles from '../styles/9colorswitch.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.switch}>
        <div className={styles.switch__item}></div>
        <div className={styles.switch__item}></div>
        <div className={styles.switch__item}></div>
      </div>
    </div>
  );
}
