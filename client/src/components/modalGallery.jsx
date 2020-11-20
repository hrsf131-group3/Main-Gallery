import React from 'react';
import styles from '../styles/modalGallery.css';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className={styles['modal-gallery']}>
          <div className={styles['two-row']}>
            <img className={styles['two-left-photo']} src="test-image2.jpg"/>
            <img className={styles['two-right-photo']} src="test-image3.jpg"/>
          </div>
          <div className={styles['three-row']}>
            <img className={styles['three-left-photo']} src="test-image.jpg"/>
            <img className={styles['three-middle-photo']} src="test-image2.jpg"/>
            <img className={styles['three-right-photo']} src="test-image3.jpg"/>
          </div>
          <div className={styles['one-row']}>
            <img className={styles['one-photo']} src="test-image.jpg"/>
          </div>
        </div>
    );
  };
}
export default GalleryModal;
