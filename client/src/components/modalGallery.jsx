import React from 'react';
import styles from '../styles/modalGallery.css';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    let images = this.props.listing.images;
    let counter = 0;
    console.log('Total Images:', images.length)
    let createGallery = (images) => {
      let counter = 0;

      for (let i = 0; i < images.length; i++) {

      }
    }

    while (counter < images.length) {
      counter++;
    }
    return (
        <div className={styles['modal-gallery']}>
          <div className={styles['two-row']}>
            <img className={styles['two-left-photo']} src={images[0]}/>
            <img className={styles['two-right-photo']} src={images[1]}/>
          </div>
          <div className={styles['three-row']}>
            <img className={styles['three-left-photo']} src={images[2]}/>
            <img className={styles['three-middle-photo']} src={images[3]}/>
            <img className={styles['three-right-photo']} src={images[4]}/>
          </div>
          <div className={styles['one-row']}>
            <img className={styles['one-photo']} src={images[5]}/>
          </div>
        </div>
    );
  };
}
export default GalleryModal;
