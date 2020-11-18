import React from 'react';

const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {children}
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
              <img className="action-icon" src="./icons/heart-outline.png" onClick={handleClose}/>
              <p>Save</p>
            </button>
            <button className="action-btn">
              <img className="action-icon" src="./icons/share.png" onClick={handleClose}/>
              <p>Share</p>
            </button>
            <button className="exit-x-btn">
              <img className="exit-icon" src="./icons/exit-x.png" onClick={handleClose}/>
            </button>
          </div>
        </div>
        <div className="listing-details">
        <p>33256 Pacific Coast Hwy | $125,000,000 | 7 Beds 10 Baths</p>
        </div>
      </div>
    </div>
  );
};
export default Modal;
