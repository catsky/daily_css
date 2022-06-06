import React from 'react';
import Image from 'next/image';
import styles from '../styles/14diagonal.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.container}>
        <div className={styles.container__diagonal}></div>
      </div>
    </div>
  );
}
