import React from 'react';
import styles from '../styles/details.css';

const Details = (listing) => {
  return (
    <div className={styles['details-bar']}>
    <div className={styles['details-bar-box']}>
      <p>{listing.listing[0].address}</p>
    </div>
  </div>
  )
}


export default Details;

// <div {styles.review}   no - one class name
// <div className={styles['details-bar']}> - one class name
// <div className={`${styles.text} ${styles.fade}`}> two class names