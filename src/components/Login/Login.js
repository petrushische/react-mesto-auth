import React from "react";

export default function Login() {
 return (
  <div className="auth">
   <button type="button" className='auth__button'>Регистрация</button>
   <h2 className="auth__title">Вход</h2>
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
   <button type="save" className='auth__button-save'>Войти</button>
  </div>
 )
}