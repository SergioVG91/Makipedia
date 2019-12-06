import React from 'react';
import '../assets/styles/components/registro.scss';

const Registro = () => (
  <div className="contenido">
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__form">
          <input className="input input--register" type="text" placeholder="Nombre" />
          <input className="input input--register" type="text" placeholder="Correo" />
          <input className="input input--register" type="password" placeholder="Contraseña" />
          <button className="button--transparente" type="button">
            Registrarme
          </button>
        </form>

        <p className="register__init">
          <a href="/">Iniciar sesión</a>
        </p>
      </section>
    </section>
  </div>
);

export default Registro;
