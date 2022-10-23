import React from "react";

function Card({ card }) {
 return (
  <li className="foto-grid__element">
   <button className="foto-grid__trash" type="button"></button>
   <img className="foto-grid__foto" src={card.link} />
   <div className="foto-grid__title">
    <h2 className="foto-grid__title-text">{card.name}</h2>
    <button className="foto-grid__button" type="button"></button>
    <span className="foto-grid__counter">{card.likes.length}</span>
   </div>
  </li>
 )
}


export default Card;