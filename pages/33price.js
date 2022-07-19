import React from 'react';
import styles from '../styles/33price.module.css';

export default function ArrowButton() {
  return (
    <>
      <div className={styles.price_tag}>$99.99</div>

      <div className={styles.border}></div>
    </>
  );
}
