import React from "react";
import logoHeader from './images/logo-header1.svg';
import avatarHeader from './images/Avatar.png'
function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img
            src={logoHeader}
            alt="Логотип Mesto"
            className="header__logo"
          />
        </header>
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
        <footer className="footer">
          <p className="footer__text">© 2020 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup">
        <button className="popup__close" type="button"></button>
        <form className="popup__container" name="profile-form" noValidate>
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

      <div className="popup popup_sprint_five">
        <div className="popup__wrapper">
          <button className="popup__button" type="button"></button>
          <img className="popup__foto" />
          <p className="popup__text"></p>
        </div>
      </div>

      <div className="popup popup_cards_add">
        <button
          className="popup__close popup__close_cards_add"
          type="button"
        ></button>
        <form
          className="popup__container popup__container-cards-add"
          name="form-cards-add"
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

      <div className="popup popup_card_delete">
        <button
          className="popup__close popup__close_card_delete"
          type="button"
        ></button>
        <div className="popup__container popup__container_card_delete">
          <h2 className="popup__title popup__title_card_delete">Вы уверены?</h2>
          <button className="popup__save popup__save_card_delete">Да</button>
        </div>
      </div>

      <div className="popup popup_avatar_delet">
        <button
          className="popup__close popup__close_avatar_delete"
          type="button"
        ></button>
        <form
          className="popup__container popup__container_avatar_delete"
          name="delete avatar"
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
