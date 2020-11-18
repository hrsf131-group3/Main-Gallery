import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
         <div className="modal-main" onClick={e => e.stopPropagation()}> { /* stopPropagation on the main modal will stop closing when clicked with in the modal.  */ }
          <div className="nav-bar">
            <button className="photos-button">
              <p>Photos</p>
            </button>
            <button className="navbar-buttons">
              <p>Map</p>
            </button>
            <button className="navbar-buttons">
              <p>Schools</p>
            </button>
            <button className="navbar-buttons">
              <p>Crime</p>
            </button>
            <button className="navbar-buttons">
              <p>Commute</p>
            </button>
            <button className="navbar-buttons">
              <p>Shop & Eat</p>
            </button>
            <div className="action-btns">
              <button className="action-btn">
                <img className="action-icon" src="./icons/heart-outline.png"/>
                <p>Save</p>
              </button>
              <button className="action-btn">
                <img className="action-icon" src="./icons/share.png"/>
                <p>Share</p>
              </button>
              <button className="exit-x-btn">
                <img className="exit-icon" src="./icons/exit-x.png" onClick={this.props.handleClose}/>
              </button>
            </div>
          </div>
          <div className="listing-details">
          <p>33256 Pacific Coast Hwy | $125,000,000 | 7 Beds 10 Baths</p>
          </div>
          <ModalGallery />
          <div className="modal-gallery">
            <div className="two-row">
            </div>
            <div className="three-row">
            </div>
            <div className="one-row">
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Modal;
