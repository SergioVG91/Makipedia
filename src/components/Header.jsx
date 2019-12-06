import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/tomate-ico.png';
import userIcon from '../assets/static/maki-icono.png';

const Header = () => (
  <header className="header">
    <div className="header__img">
      <Link to="/">
        <img className="header__img--logo" src={logo} alt="Tomate" />
        <span className="header__img--letras">Makipedia</span>
      </Link>
    </div>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
