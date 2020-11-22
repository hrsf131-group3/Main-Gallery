import React from 'react';
import styles from '../styles/modalCarousel.css';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    let price = this.props.listing.price;
    let numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div className={this.props.show ? `${styles.modal} ${styles['display-block']}` : `${styles.modal} ${styles['display-none']}`} >
        <div className={styles['nav-bar']}>
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
              <p>X</p>
            </button>
          </div>
        </div>
         <div className={styles['modal-main']} onClick={e => e.stopPropagation()}> { /* stopPropagation on the main modal will stop closing when clicked with in the modal.  */ }
        </div>
      </div>
    );
  };
}
export default ModalCarousel;