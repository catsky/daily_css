import React from 'react';
import Image from 'next/image';
import styles from '../styles/3avatar.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.avatar}>
        <Image
          className={styles.avatar__image}
          src="/images/3avatar.webp"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
