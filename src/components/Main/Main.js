import React, { useEffect } from "react";
import avatarHeader from '../../images/Avatar.png'

import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
 let [userName, setUserName] = React.useState();
 let [userDescription, setUserDescription] = React.useState();
 let [userAvatar, setUserAvatar] = React.useState();


 useEffect(() => {
  api.userInformationGet()
   .then((res) => {
    setUserName(res.name);
    setUserDescription(res.about);
    setUserAvatar(res.avatar);

   })
 })

 return (
  <main className="main">
   <section className="profile">
    <div className="profile__wrapper" onClick={onEditAvatar}>
     <img
      src={userAvatar}
      alt="Жак-Ив Кусто"
      className="profile__avatar"
     />
    </div>
    <div className="profile__info">
     <h1 className="profile__title">{userName}</h1>
     <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
     <p className="profile__subtitle">{userDescription}</p>
    </div>
    <button className="profile__button-add" type="button" onClick={onAddPlace}></button>
   </section>
   <section className="foto-grid" aria-label="Карточки">
    <ul className="foto-grid__elements"></ul>
   </section>
  </main>
 )
}



export default Main;