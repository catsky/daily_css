import React from 'react';
import Image from 'next/image';
import styles from '../styles/4avatar_list.module.css';

export default function ArrowButton() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.avatar}>
        <div className={styles.avatar__item}>
          <div className={styles.avatar__image}>
            <Image
              src="/images/3avatar.webp"
              className={styles.avatar__image__next}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles.avatar__item}>
          <div className={styles.avatar__image}>
            <Image
              src="/images/3avatar.webp"
              className={styles.avatar__image__next}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles.avatar__item}>
          <div className={styles.avatar__image}>
            <Image
              src="/images/3avatar.webp"
              className={styles.avatar__image__next}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
