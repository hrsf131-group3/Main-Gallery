import React from 'react';
import styles from '../styles/modal.css';
import GalleryModal from './modalGallery.jsx';
import ModalCarousel from './modalCarousel.jsx';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
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

    let price = this.props.listing.price;
    let numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div className={this.props.show ? `${styles.modal} ${styles['display-block']}` : `${styles.modal} ${styles['display-none']}`} >
         <div className={styles['modal-main']} onClick={e => e.stopPropagation()}> { /* stopPropagation on the main modal will stop closing when clicked with in the modal.  */ }
          <div className={styles['nav-bar']}>
            <button className={styles['photos-button']}>
              <p>Photos</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Map</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Schools</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Crime</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Commute</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Shop & Eat</p>
            </button>
            <div className={styles['action-btns']}>
              <button className={styles['action-btn']}>
                <img className={styles['action-icon']} src="./icons/heart-outline.png"/>
                <p>Save</p>
              </button>
              <button className={styles['action-btn']}>
                <img className={styles['action-icon']} src="./icons/share.png"/>
                <p>Share</p>
              </button>
              <button className={styles['exit-x-btn']}>
                <img className={styles['exit-icon']} src="./icons/exit-x.png" onClick={this.props.handleClose}/>
              </button>
            </div>
          </div>
          <div className={styles['listing-details']}>
          <p>{this.props.listing.address} | ${numberWithCommas(price)} | {this.props.listing.bed} Beds {this.props.listing.bath} Baths</p>
          </div>
          <GalleryModal listing={this.props.listing} carouselView={this.toggleModal}/>
        </div>
        <ModalCarousel show={this.state.show}
          handleClose={this.toggleModal}
          listing={this.props.listing}
          />
      </div>
    );
  };
}
export default Modal;
