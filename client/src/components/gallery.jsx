import React from 'react'
import Modal from './modal.jsx';

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
      <div className="gallery-container" onClick={this.toggleModal}>
        <div className="zoom">
          <div className="left-main-gallery">
            <img className="left-main-photo" src="test-image.jpg"/>
          </div>
        <div className="right-main-gallery">
          <img className="right-top-main-photo" src="test-image2.jpg"/>
          <img className="right-bottom-main-photo" src="test-image3.jpg"/>
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