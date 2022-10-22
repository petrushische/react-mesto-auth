import React from "react";
import logoHeader from '../../images/logo-header1.svg';
function Header() {
 return (
  <header className="header">
   <img
    src={logoHeader}
    alt="Логотип Mesto"
    className="header__logo"
   />
  </header>

 )
}

export default Header;