import React from 'react';
import Image from 'next/image';
import styles from '../styles/16dotleader.module.css';

export default function ArrowButton() {
  return (
    <div style={{ margin: '10px' }}>
      <div className={styles.container}>
        <div>welcome</div>
        <div className={styles.container__dots}></div>
        <div>33</div>
      </div>
      <div className={styles.container}>
        <div>welcome</div>
        <div className={styles.container__dots}></div>
        <div>33</div>
      </div>
      <div className={styles.container}>
        <div>welcome</div>
        <div className={styles.container__dots}></div>
        <div>33</div>
      </div>
    </div>
  );
}
