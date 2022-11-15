import React, { useEffect } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


import ImagePopup from "./ImagePopup/ImagePopup";
/*import { popupCardsAdd, popupChangeProfile, popupChangeFoto } from "./PopupWithForm/PopupWithForm";*/

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  useEffect(() => {
    api.userInformationGet()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err))
  }, [])

  //1
  const [cards, setCards] = React.useState([]);
  //2
  useEffect(() => {
    api.cards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => console.log(`Ошибка${err}`))
  }, [])
  //3
  function handleCardLike(card) {
    const isliked = card.likes.some(elem => elem._id === currentUser._id)
    api.changeLikeCard(card._id, isliked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(err))
  }
  //4
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        //////////////////////////////////////////////////////////////////////
        const newCard = cards.filter((elem) => elem._id !== card._id)
        setCards(newCard)
        ////////////////////////////////////////////////////////////////////////
      })
  }

  //состояния для открытия попАпов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  /*const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);*/
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true)
  }
  /* function handleDeleteCard() {
     setIsDeleteCardPopupOpen(true)
   }*/
  function handleCardClick(url, text) {
    setSelectedCard({ url, text })
  }

  // обработчик закрытия поп апов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    /*setIsDeleteCardPopupOpen(false)*/
    setSelectedCard({})
  }
  // обновление данных пользователя
  function handleUpdateUser({ name, about }) {
    api.userInformationPath({ name, about })
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // обновление аватара
  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // Новая карточка
  function handleNewCard({ name, src }) {
    api.cardPost({ name, src })
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
        console.lof(err)
      })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Header />
        <Main onEditProfile={handleEditAvatarClick} onAddPlace={handleEditProfileClick} onEditAvatar={handleAddPlaceClick} /*onDeleteCard={handleDeleteCard}*/ onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      {/*<PopupWithForm title='Вы уверены?' name='_card_delete' isOpen={isDeleteCardPopupOpen ? 'popup__opened' : ''} onClose={closeAllPopups} />*/}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={Object.entries(selectedCard).length === 0 ? '' : 'popup__opened'} />
      < EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleNewCard} />
    </CurrentUserContext.Provider>
  );
}

export default App;
