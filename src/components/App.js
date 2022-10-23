import React from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";
import { popupCardsAdd, popupChangeProfile, popupChangeFoto } from "./PopupWithForm/PopupWithForm";

function App() {
  //состояния для открытия попАпов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true)
  }
  // обработчик закрытия поп апов
  /* function closeAllPopups() {
     setIsEditProfilePopupOpen(false)
     setIsAddPlacePopupOpen(false)
     setIsEditAvatarPopupOpen(false)
   }*/
  function closeVanPopups() {
    setIsEditProfilePopupOpen(false)
  }
  function closeTwoPopups() {
    setIsAddPlacePopupOpen(false)
  }
  function closeThreePopups() {
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditAvatarClick} onAddPlace={handleEditProfileClick} onEditAvatar={handleAddPlaceClick} />
        <Footer />
      </div>
      <PopupWithForm title='Редактировать профиль' name='_change_profile' jsx={popupChangeProfile} isOpen={isEditProfilePopupOpen ? 'popup__opened' : ''} onClose={closeVanPopups}
      />
      <PopupWithForm title='Новое место' name='_cards_add' jsx={popupCardsAdd} isOpen={isAddPlacePopupOpen ? 'popup__opened' : ''} onClose={closeTwoPopups}
      />
      <PopupWithForm title='Обновить аватар' name='_avatar_delete' jsx={popupChangeFoto} isOpen={isEditAvatarPopupOpen ? 'popup__opened' : ''} onClose={closeThreePopups}
      />
      { /*Здесь попап удаления карточки*/}
      <ImagePopup />

      <template id="template-card">
        <li className="foto-grid__element">
          <button className="foto-grid__trash" type="button"></button>
          <img className="foto-grid__foto" />
          <div className="foto-grid__title">
            <h2 className="foto-grid__title-text"></h2>
            <button className="foto-grid__button" type="button"></button>
            <span className="foto-grid__counter"></span>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;




// Редактирование полей профиля
{/* <div className="popup ">
        <button className="popup__close" type="button"></button>
        <form className="popup__container" name="popup__container" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>

          <input
            name="name"
            id="change-one"
            type="text"
            className="popup__input popup__input_type_name"
            required
            minLength="2"
            maxLength="40"
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
          />
          <span className="popup__error change-two-error"></span>
          <button className="popup__save">Сохранить</button>
        </form>
      </div> 
*/}




// Добавление карточек 
{/*<div className="popup popup_cards_add">
        <button
          className="popup__close popup__close_cards_add"
          type="button"
        ></button>
        <form
          className="popup__container popup__container_cards_add"
          name="cards_add"
          noValidate
        >
          <h2 className="popup__title popup__title-cards-add">Новое место</h2>
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
          <button className="popup__save">Сохранить</button>
        </form>
      </div>
*/}


// Удаление карточек 
{/*   <div className="popup popup_card_delete">
        <button
          className="popup__close popup__close_card_delete"
          type="button"
        ></button>
        <form className="popup__container popup__container_card_delete">
          <h2 className="popup__title popup__title_card_delete">Вы уверены?</h2>
          <button className="popup__save popup__save_card_delete">Да</button>
        </form>
      </div>
*/}

// Редактирование Профиля картинки

{/*  <div className="popup popup_avatar_delet">
        <button
          className="popup__close popup__close_avatar_delete"
          type="button"
        ></button>
        <form
          className="popup__container popup__container_avatar_delete"
          name="avatar_delete"
          noValidate
        >
          <h2 className="popup__title">Обновить аватар</h2>
          <input
            name="avatar"
            id="change-five"
            type="url"
            className="popup__input popup__input_avatar_delete"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error change-five-error"></span>
          <button className="popup__save popup__save_avatar_delete">Сохранить</button>
        </form>
      </div>
*/}


// Биг попап с картинкой 
{/*
<div className="popup popup_sprint_five">
        <div className="popup__wrapper">
          <button className="popup__button" type="button"></button>
          <img className="popup__foto" />
          <p className="popup__text"></p>
        </div>
      </div>
*/}