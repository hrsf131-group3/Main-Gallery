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
    let images = this.props.listing[0].images;
    return (
      <div className={styles['gallery-container']} onClick={this.toggleModal}>
        <div className={styles.zoom}>
          <div className={styles['left-main-gallery']}>
            <img className={styles['left-main-photo']} src={images[0]}/>
          </div>
        <div className={styles['right-main-gallery']}>
          <img className={styles['right-top-main-photo']}src={images[1]}/>
          <img className={styles['right-bottom-main-photo']} src={images[2]}/>
        </div>
      </div>
      <Modal show={this.state.show}
      handleClose={this.toggleModal}
      listing={this.props.listing[0]}
      />
    </div>

    )
  }
}

export default Gallery;