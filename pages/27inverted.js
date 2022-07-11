import React from 'react';
import Image from 'next/image';
import styles from '../styles/27inverted.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.container}>
      <div className={styles.inverted_corners}></div>
    </div>
  );
}
