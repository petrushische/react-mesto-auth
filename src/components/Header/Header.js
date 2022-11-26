import React from "react";
import logoHeader from '../../images/logo-header1.svg';
import { Link, Route } from 'react-router-dom';
function Header({ userData, cbLogout }) {
 console.log(userData)
 return (
  <header className="header">
   <img
    src={logoHeader}
    alt="Логотип Mesto"
    className="header__logo"
   />
   <Route path="/sign-in">
    <Link to='sign-up' className="header__link">Регистрация</Link>
   </Route>
   <Route path="/sign-up">
    <Link to='sign-in' className="header__link">Войти</Link>
   </Route>
   <Route exact path="/">
    <p className="header__user-data">{userData.email}</p>
    <Link to='sign-in' className="header__link" onClick={cbLogout}>Выйти</Link>
   </Route>
  </header>

 )
}

export default Header;