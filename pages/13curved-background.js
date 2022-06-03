import React from 'react';
import Image from 'next/image';
import styles from '../styles/13curved-background.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.container}>
        <h1>welcome to our land</h1>
      </div>
    </div>
  );
}
