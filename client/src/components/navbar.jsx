import React from 'react'
import styles from '../styles/navbar.css'

const Navbar = () => (
  <div>
    <nav className={styles['nav-bar']}>
      <div className={styles['trulia-logo-box']}>
      <img className={styles['trulia-logo']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Header.png"/>
      </div>
    </nav>
  </div>
)


export default Navbar;