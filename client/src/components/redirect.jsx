import React from 'react';
import styles from '../styles/navbar.css'

const Redirect = (listing) => (
  <div>
    <nav className={styles['nav-bar']}>
      <div className={styles['trulia-logo-box']}>
        <img className={styles['trulia-logo']} src="./icons/trulia_logo.png"/>
      </div>
    </nav>
    <div className={styles['dead-end-box']}>
      <img className={styles['dead-end']} src="dead-end.jpg"/>
    </div>
  </div>
)


export default Redirect;
