import React from "react";

export default function Register() {
 return (
  <div className="auth">
   <button type="button" className='auth__button'>Войти</button>
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
   <h3 className='auth__subtitle'>Уже зарегистрированы? <button type="button" className="auth__subtitle-button">Войти</button></h3>
  </div>

 )
}