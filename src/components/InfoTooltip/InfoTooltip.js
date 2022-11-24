import React from "react";
import logoTrue from '../../images/logo-info.svg';
import logoFalse from '../../images/logo-info-false.svg';

export default function InfoTooltip() {
 return (
  <div className="popup info-popup">
   <div className="info-popup__wrapper">
    <button className="info-popup__close-button"></button>
    <img
     src={logoTrue}
     alt="Лого ответа"
     className="info-popup__logo"
    />
    <p className="info-popup__text">Вы успешно зарегистрировались!</p>
   </div>
  </div>
 )
}