import React from 'react';
import Modal from './modal.jsx';
import styles from '../styles/gallery.css';


class Gallery extends React.Component {
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
    return (
      <div className={styles['gallery-container']} onClick={this.toggleModal}>
        <div className={styles.zoom}>
          <div className={styles['left-main-gallery']}>
            <img className={styles['left-main-photo']} src="test-image.jpg"/>
          </div>
        <div className={styles['right-main-gallery']}>
          <img className={styles['right-top-main-photo']}src="test-image2.jpg"/>
          <img className={styles['right-bottom-main-photo']} src="test-image3.jpg"/>
        </div>
      </div>
      <Modal show={this.state.show}
      handleClose={this.toggleModal}
      >
      </Modal>
    </div>

    )
  }
}

export default Gallery;