import React from 'react';
import styles from '../styles/modalCarousel.css';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentImage: null,
      // index: null,
    }
    // this.handlePrev = this.handlePrev.bind(this);
    // this.handleNext = this.handleNext.bind(this);
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    let numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let price = numberWithCommas(this.props.listing.price);
    let image = this.props.listing.images[parseInt(this.props.id)]
    let address = this.props.listing.address;
    let bed = this.props.listing.bed;
    let bath = this.props.listing.bath;
    let currentImage = this.props.url;

    console.log('id:', this.props.id + 1)

    return (
      <div className={this.props.show ? `${styles.modal} ${styles['display-block']}` : `${styles.modal} ${styles['display-none']}`} onClick={e => e.stopPropagation()}>
        <div className={styles['nav-bar']}>
          <div className={styles['listing-info']}>
            {address} | ${price} | {bed} Beds | {bath} Baths
          </div>
         <div className={styles['action-btns']}>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/heart-outline.png"/>
              <p>Save</p>
            </button>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/share.png"/>
              <p>Share</p>
            </button>
            <button className={styles['exit-x-btn']} onClick={this.props.closeModal}>
              <p>X</p>
            </button>
          </div>
        </div>
         <div className={styles['modal-main']}>
         <div className={styles['current-photo-box']}>
          <img className={styles['current-photo']} src={currentImage}/>
          <div className={styles['photo-nav-btns']}>
            <button className={styles['nav-btn-prev']} onClick={this.props.handlePrev}> {'<'} </button>
            <button className={styles['nav-btn-next']}onClick={this.props.handleNext}>{'>'}</button>
          </div>
         </div>
         <div className={styles['photo-view-count']}>
           {parseInt(this.props.id) + 1} of {this.props.listing.images.length}
         </div>
        </div>
      </div>
    );
  };
}
export default ModalCarousel;