import React from 'react';
import Image from 'next/image';
import styles from '../styles/26initial.module.css';

export default function ArrowButton() {
  return (
    <div>
      <div className={styles.avatar}>
        <div className={styles.avatar__letter}>DZ</div>
      </div>
    </div>
  );
}
