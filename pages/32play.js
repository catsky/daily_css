import React from 'react';
import styles from '../styles/32play.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.container}>
      <video src="..." />

      <div className={styles.container__overlay}>{'>'}</div>
    </div>
  );
}
