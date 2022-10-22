import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";

function ImagePopup() {
 return (
  <div className="popup popup_sprint_five">
   <div className="popup__wrapper">
    <button className="popup__button" type="button"></button>
    <img className="popup__foto" />
    <p className="popup__text"></p>
   </div>
  </div>
 )
}

export default ImagePopup;
