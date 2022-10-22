import React from "react";

function PopupWithForm({ title, name, jsx, isOpen, onClose }) {
 return (
  <div className={`popup popup${name} ${isOpen}`}>
   <button className={`popup__close popup__close${name}`} type="button" onClick={onClose}></button>
   <form className={`popup__container popup__container${name}`} name={name} noValidate>
    <h2 className={`popup__title popup__title${name}`}>{title}</h2>

    {jsx}
    <button className={`popup__save popup__save${name}`}>Сохранить</button>
   </form>
  </div>
 )
}



// редактирование полей профиля
const popupChangeProfile =
 <>
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
 </>

// Добавление карточек
const popupCardsAdd =
 <>
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

// Редактирование фотографии профиля
const popupChangeFoto =
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


export { popupCardsAdd, popupChangeProfile, popupChangeFoto };


export default PopupWithForm;