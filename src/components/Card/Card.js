import React from "react";

import trash from '../../images/button-trash.svg'
import like from '../../images/Like1.svg'

function Card({ card, onDeleteCardForCard }) {
 return (
  <li className="foto-grid__element">
   <button className="foto-grid__trash" type="button" style={{ backgroundImage: `url(${trash})` }} onClick={onDeleteCardForCard}></button>
   <img className="foto-grid__foto" src={card.link} />
   <div className="foto-grid__title">
    <h2 className="foto-grid__title-text">{card.name}</h2>
    <button className="foto-grid__button" type="button" style={{ backgroundImage: `url(${like})` }}></button>
    <span className="foto-grid__counter">{card.likes.length}</span>
   </div>
  </li>
 )
}


export default Card;