import React from 'react';
import Image from 'next/image';
import styles from '../styles/11cookie_banner.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.cookie_banner}>
        <div className={styles.banner_text}>welcome, please note</div>
        <div className={styles.banner_button}>Accept</div>
      </div>
    </div>
  );
}
