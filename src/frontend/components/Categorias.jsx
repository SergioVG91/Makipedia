import React from 'react';
import '../assets/styles/components/categorias.scss';

const Categorias = ({ children, title }) => (
  <section className="categories">
    <h2 className="categories__title">{title}</h2>
    {children}
  </section>
);

export default Categorias;
