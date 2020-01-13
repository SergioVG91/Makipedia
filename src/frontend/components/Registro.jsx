import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/registro.scss';

const Registro = (props) => {
  const [form, setValues] = useState({ user: '', email: '', password: '' });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <div className="contenido">
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              className="input input--register"
              type="text"
              placeholder="Nombre"
              name="user"
            />
            <input
              onChange={handleInput}
              className="input input--register"
              type="text"
              placeholder="Correo"
              name="email"
            />
            <input
              onChange={handleInput}
              className="input input--register"
              type="password"
              placeholder="Contraseña"
              name="password"
            />
            <button className="button--transparente" type="submit">
              Registrarme
            </button>
          </form>

          <p className="register__init">
            <Link to="/login">Iniciar sesión</Link>
          </p>
        </section>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Registro);
