import React from 'react';
import styles from '../styles/modalCarousel.css';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    let numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let price = numberWithCommas(this.props.listing.price);
    let image = this.props.listing.images[this.props.id]
    let address = this.props.listing.address;
    let bed = this.props.listing.bed;
    let bath = this.props.listing.bath;
    let currentImage = this.props.url;

    console.log('id:', this.props.id)
    return (
      <div className={this.props.show ? `${styles.modal} ${styles['display-block']}` : `${styles.modal} ${styles['display-none']}`} onClick={e => e.stopPropagation()}>
        <div className={styles['nav-bar']}>
          <div className={styles['listing-info']}>
            {address} | ${price} | {bed} Beds | {bath} Baths
          </div>
         <div className={styles['action-btns']}>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="./icons/heart-outline.png"/>
              <p>Save</p>
            </button>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="./icons/share.png"/>
              <p>Share</p>
            </button>
            <button className={styles['exit-x-btn']} onClick={this.props.handleClose}>
              <p>X</p>
            </button>
          </div>
        </div>
         <div className={styles['modal-main']}>
         <div className={styles['current-photo-box']}>
          <img className={styles['current-photo']} src={currentImage}/>
         </div>
         <div className={styles['photo-view-count']}>
           {this.props.id} of {this.props.listing.images.length}
         </div>
        </div>
      </div>
    );
  };
}
export default ModalCarousel;