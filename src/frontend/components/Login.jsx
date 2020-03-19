import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import twitterIcon from '../assets/static/twitter-icon.png';
import googleIcon from '../assets/static/google-icon.png';
import '../assets/styles/components/login.scss';

const Login = (props) => {
  const [form, setValues] = useState({ email: '', password: '' });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input input--login"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
            value={form.email}
          />
          <input
            name="password"
            className="input input--login"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            value={form.password}
          />
          <button className="button--transparente" type="submit">
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
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
