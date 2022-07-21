import React from 'react';
import styles from '../styles/36questions.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <div>Title</div>
        <div>{'>'}</div>
      </div>
      <div className={styles.container__heading}>
        <div>Title</div>
        <div>{'>'}</div>
      </div>
      <div className={styles.container__heading}>
        <div>Title</div>
        <div>{'>'}</div>
      </div>
      <div className={styles.container__heading}>
        <div>Title</div>
        <div>{'>'}</div>
      </div>
    </div>
  );
}
