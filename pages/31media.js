import React from 'react';
import styles from '../styles/31media.module.css';

export default function ArrowButton() {
  return (
    <div className={styles.flex_container}>
      <div className={styles.flex_item_left}>text</div>
      <div className={styles.flex_item_right}>
        {' '}
        Cascading Style Sheets (CSS) is a style sheet language used for
        describing the presentation of a document written in a markup language
        like HTML. CSS is a cornerstone technology of the World Wide Web,
        alongside HTML and JavaScript.
      </div>
    </div>
  );
}
