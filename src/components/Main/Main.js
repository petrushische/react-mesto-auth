import React from "react";
import avatarHeader from '../../images/Avatar.png'

function Main() {
 return (
  <main className="main">
   <section className="profile">
    <div className="profile__wrapper">
     <img
      src={avatarHeader}
      alt="Жак-Ив Кусто"
      className="profile__avatar"
     />
    </div>
    <div className="profile__info">
     <h1 className="profile__title">Жак-Ив Кусто</h1>
     <button className="profile__button-edit" type="button"></button>
     <p className="profile__subtitle">Исследователь океана</p>
    </div>
    <button className="profile__button-add" type="button"></button>
   </section>
   <section className="foto-grid" aria-label="Карточки">
    <ul className="foto-grid__elements"></ul>
   </section>
  </main>

 )
}

export default Main;