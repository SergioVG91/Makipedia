import React from 'react';
import '../assets/styles/components/buscador.scss';

const Buscador = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input className="input--buscar" type="text" placeholder="Buscar..." />
  </section>
);

export default Buscador;
