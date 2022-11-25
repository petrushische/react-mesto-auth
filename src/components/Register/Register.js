import React from "react";
import { Link, Route } from 'react-router-dom';

export default function Register() {

 const [email, setEmail] = React.useState('')
 const [password, setPassword] = React.useState('')

 function handleChangeInput(evt) {
  if (evt.target.type === 'email') {
   console.log(evt.target.value)
   setEmail(evt.target.value)
  } else if (evt.target.type === 'password') {
   console.log(evt.target.value)
   setPassword(evt.target.value)
  }
  return
 }
 function handleSubmit(evt) {
  evt.preventDefault()
  // сюда добавим логику обработки формы регистрации
 }


 return (
  <div className="auth">
   <h2 className="auth__title">Регистрация</h2>
   <form className='auth__form' name="Login" noValidate onSubmit={handleSubmit}>
    <input
     value={email || ''}
     onChange={handleChangeInput}
     className='auth__input'
     name="Login-email"
     type="email"
     placeholder="Email">
    </input>
    <input
     value={password || ''}
     onChange={handleChangeInput}
     className='auth__input'
     name="password-email"
     type="password"
     placeholder="Пароль">
    </input>
    <button type="save" className='auth__button-save'>Зарегестрироваться</button>
   </form>
   <h3 className='auth__subtitle'>Уже зарегистрированы? <Route path="/sign-up"><Link to='sign-in' className="auth__subtitle-button">Войти</Link></Route></h3>
  </div>

 )
}