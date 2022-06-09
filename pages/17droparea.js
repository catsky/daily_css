import React from 'react';
import Image from 'next/image';
import styles from '../styles/17droparea.module.css';

export default function ArrowButton() {
  return (
    <div style={{ margin: '10px' }}>
      <div className={styles.container}>drop here</div>
    </div>
  );
}
