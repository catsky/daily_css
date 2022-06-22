import React from 'react';
import Image from 'next/image';
import styles from '../styles/24folder.module.css';

export default function ArrowButton() {
  return (
    <div>
      <div className={styles.folder_structure}>
        <ul>
          <li>
            <ul>
              <li>
                <ul>
                  <li>hello</li>
                  <li>welcome</li>
                </ul>
              </li>
              <li>yes</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
