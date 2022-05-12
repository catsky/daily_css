import React from 'react';
import styles from '../styles/1accordion.module.css';

export default function Accordion() {
  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <div className={styles.accordion}>
        {/* <!-- Each accordion item --> */}
        <div className={styles.accordion__item}>
          {/* <!-- Heading --> */}
          <div className={styles.accordion__header}>
            {/* <!-- The toggle icon --> */}
            <div className={styles.accordion__toggle}>..toggle.</div>

            {/* <!-- The title --> */}
            <div className={styles.accordion__title}>title...</div>
          </div>

          {/* <!-- The content --> */}
          <div
            className={`${styles.accordion__content} ${styles['accordion__content--selected']}`}
          >
            faas asdf asdfasdf asdfasdfasdf asdf
          </div>
        </div>
        <div className={styles.accordion__item}>
          {/* <!-- Heading --> */}
          <div className={styles.accordion__header}>
            {/* <!-- The toggle icon --> */}
            <div className={styles.accordion__toggle}>..toggle.</div>

            {/* <!-- The title --> */}
            <div className={styles.accordion__title}>title...</div>
          </div>

          {/* <!-- The content --> */}
          <div className={styles.accordion__content}>...content</div>
        </div>
        {/* <!-- Repeat other item --> */}
      </div>
    </div>
  );
}
