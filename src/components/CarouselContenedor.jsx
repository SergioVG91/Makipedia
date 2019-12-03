import React from 'react';
import '../assets/styles/components/carouselContenedor.scss';

const CarouselContenedor = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">{children}</div>
  </section>
);

export default CarouselContenedor;
