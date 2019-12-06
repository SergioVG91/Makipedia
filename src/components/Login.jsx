import React from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../assets/static/twitter-icon.png';
import googleIcon from '../assets/static/google-icon.png';
import '../assets/styles/components/login.scss';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__form">
        <input className="input input--login" type="text" placeholder="Correo" />
        <input className="input input--login" type="password" placeholder="Contraseña" />
        <button className="button--transparente" type="button">
          Iniciar sesión
        </button>
        <div className="login__remember-me">
          <label htmlFor="cbox1">
            <input type="checkbox" name="" id="cbox1" value="checkbox" />
            Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__social-media">
        <button className="button--google" type="button">
          <img className="button__icon" src={googleIcon} alt="Google" />
          Iniciar sesión con Google
        </button>
        <button className="button--twitter" type="button">
          <img className="button__icon" src={twitterIcon} alt="Twitter" />
          Iniciar sesión con Twitter
        </button>
      </section>
      <p className="login__register">
        ¿No tienes ninguna cuenta?
        <Link to="/registro"> Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
