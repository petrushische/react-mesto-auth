import React from "react";

function ImagePopup({ card, onClose, isOpen }) {
 return (
  <div className={`popup popup_sprint_five ${isOpen}`}>
   <div className="popup__wrapper">
    <button className="popup__button" type="button" onClick={onClose}></button>
    <img className="popup__foto" src={card.url} />
    <p className="popup__text">{card.text}</p>
   </div>
  </div>
 )
}

export default ImagePopup;
