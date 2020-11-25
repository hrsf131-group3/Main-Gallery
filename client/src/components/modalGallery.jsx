import React from 'react';
import styles from '../styles/modalGallery.css';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null,
      current: 0,
    };

  }

  // make a compnent did mount func tied to the loading of the state to have a more semaless intial load

  render() {
    let images = this.props.listing.images.slice(0);

    /*
    let popImages = [];
    let popCount = 0;
    let patternLength = images.length;
    <-- This will ensure the images array is divisble by 6 to compelte the pattern -->
    if (!Number.isInteger(patternLength/6)) {
      while (!Number.isInteger(patternLength/6)) {
        popImages.push(images.pop())
        patternLength--;
      }
    }
    */
    let gridOfDivs = [];

    let createGallery = (images) => {
      let counter = 0;
      let row = 2;
      while (counter < images.length) {
        if (row === 2) {
          gridOfDivs.push(
            <div className={styles['two-row']}>
              <img id={counter} className={styles['two-left-photo']} src={images[counter]} onClick={this.props.carouselView}/>
              <img id={counter+=1} className={styles['two-right-photo']} src={images[counter+=1]} onClick={this.props.carouselView}/>
            </div>
          )
          counter += 2;
          row = 3;
        }
        if (row === 3) {
          gridOfDivs.push(
            <div className={styles['three-row']}>
              <img id={counter} className={styles['three-left-photo']} src={images[counter]} onClick={this.props.carouselView}/>
              <img id={counter+=1} className={styles['three-middle-photo']} src={images[counter+=1]} onClick={this.props.carouselView}/>
              <img id={counter+=2} className={styles['three-right-photo']} src={images[counter+=2]} onClick={this.props.carouselView}/>
            </div>
          )
          counter += 3;
          row = 1;
        }
        if (row === 1) {
          gridOfDivs.push(
            <div className={styles['one-row']}>
              <img id={counter} className={styles['one-photo']} src={images[counter]} onClick={this.props.carouselView}/>
            </div>
          )
          counter += 1;
          row = 2;
        }
      }
      return gridOfDivs;
    }
    let grid = createGallery(images);

    return (
        <div className={styles['modal-gallery']}>
          {grid.map( (row) => {return row;})}
          {/* <ModalCarousel show={this.state.show}
            handleClose={this.toggleModal}
            listing={this.props.listing}
            /> */}
        </div>
    );
  };
}
export default GalleryModal;

          // <div className={styles['two-row']}>
          //   <img className={styles['two-left-photo']} src={images[0]}/>
          //   <img className={styles['two-right-photo']} src={images[1]}/>
          // </div>
          // <div className={styles['three-row']}>
          //   <img className={styles['three-left-photo']} src={images[2]}/>
          //   <img className={styles['three-middle-photo']} src={images[3]}/>
          //   <img className={styles['three-right-photo']} src={images[4]}/>
          // </div>
          // <div className={styles['one-row']}>
          //   <img className={styles['one-photo']} src={images[5]}/>
          // </div>