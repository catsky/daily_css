import React from 'react';
import Image from 'next/image';
import styles from '../styles/5badge.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.badge}>1</div>
    </div>
  );
}
