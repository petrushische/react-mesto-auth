import React from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";
/*import { popupCardsAdd, popupChangeProfile, popupChangeFoto } from "./PopupWithForm/PopupWithForm";*/

function App() {
  //состояния для открытия попАпов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleDeleteCard() {
    setIsDeleteCardPopupOpen(true)
  }
  function handleCardClick(url, text) {
    setSelectedCard([url, text])
    console.log(selectedCard)
  }
  // обработчик закрытия поп апов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsDeleteCardPopupOpen(false)
    setSelectedCard(false)
  }
  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditAvatarClick} onAddPlace={handleEditProfileClick} onEditAvatar={handleAddPlaceClick} onDeleteCard={handleDeleteCard} onCardClick={handleCardClick} />
        <Footer />
      </div>
      <PopupWithForm title='Редактировать профиль' name='_change_profile' isOpen={isEditProfilePopupOpen ? 'popup__opened' : ''} onClose={closeAllPopups} >
        <>
          <input
            name="name"
            id="change-one"
            type="text"
            className="popup__input popup__input_type_name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span className="popup__error change-one-error"></span>

          <input
            name="about"
            id="change-two"
            type="text"
            className="popup__input popup__input_type_text"
            required
            minLength="2"
            maxLength="200"
            placeholder="Описание"
          />
          <span className="popup__error change-two-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm title='Новое место' name='_cards_add' isOpen={isAddPlacePopupOpen ? 'popup__opened' : ''} onClose={closeAllPopups}> <>
        <input
          name="name"
          id="change-three"
          type="text"
          className="popup__input popup__input-cards-add-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error change-three-error"></span>
        <input
          name="about"
          id="change-four"
          type="url"
          className="popup__input popup__input-cards-add-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error change-four-error"></span>
      </>
      </PopupWithForm>
      <PopupWithForm title='Обновить аватар' name='_avatar_delete' isOpen={isEditAvatarPopupOpen ? 'popup__opened' : ''} onClose={closeAllPopups}>
        <>
          <input
            name="avatar"
            id="change-five"
            type="url"
            className="popup__input popup__input_avatar_delete"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error change-five-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm title='Вы уверены?' name='_card_delete' isOpen={isDeleteCardPopupOpen ? 'popup__opened' : ''} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={selectedCard ? 'popup__opened' : ''} />
    </>
  );
}

export default App;
