import React from "react";
import { Link, Route } from 'react-router-dom';
export default function Register() {
 return (
  <div className="auth">
   <h2 className="auth__title">Регистрация</h2>
   <form className='auth__form' name="Login">

    <input
     className='auth__input'
     name="Login-email"
     type="email"
     placeholder="Email">
    </input>
    <input
     className='auth__input'
     name="password-email"
     type="password"
     placeholder="Пароль">
    </input>
   </form>
   <button type="save" className='auth__button-save'>Зарегестрироваться</button>
   <h3 className='auth__subtitle'>Уже зарегистрированы? <Route path="/sign-up"><Link to='sign-in' className="auth__subtitle-button">Войти</Link></Route></h3>
  </div>

 )
}