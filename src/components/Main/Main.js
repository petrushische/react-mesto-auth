import React, { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/api";

import Card from "../Card/Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onDeleteCard, onCardClick }) {

  const [cards, setCards] = React.useState([]);
  const userDate = React.useContext(CurrentUserContext)

  useEffect(() => {
    api.cards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => console.log(`Ошибка${err}`))
  }, [])
  function handleCardLike(card) {
    const isliked = card.likes.some(elem => elem._id === userDate._id)
    api.changeLikeCard(card._id, isliked)
      .then((newCard) => {

        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(err))
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        //////////////////////////////////////////////////////////////////////
        const newCard = cards.filter((elem) => elem._id !== card._id)
        setCards(newCard)
        /*setCards((state) => state.filter((elem) => elem._id === NewCard._id))*/
        ////////////////////////////////////////////////////////////////////////
      })
  }
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__wrapper" onClick={onEditAvatar}>
          <img
            src={userDate.avatar}
            alt="Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userDate.name}</h1>
          <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDate.about}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="foto-grid" aria-label="Карточки">
        <ul className="foto-grid__elements">
          {cards.map((elem) => (
            <Card card={elem} key={elem._id} onDeleteCardForCard={onDeleteCard} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  )
}



export default Main;