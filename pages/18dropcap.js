import React from 'react';
import Image from 'next/image';
import styles from '../styles/18dropcap.module.css';

export default function ArrowButton() {
  return (
    <div style={{ margin: '10px' }}>
      <div className={styles.container} data="welcome">
        The Registrar makes every reasonable effort to maintain current and
        accurate information on this site. The Commissioner of Taxation advises
        that if you use ABN Lookup for information about another entity for
        taxation purposes and that information turns out to be incorrect, in
        certain circumstances you will be protected from liability. For more
        information see disclaimer.
      </div>
    </div>
  );
}
