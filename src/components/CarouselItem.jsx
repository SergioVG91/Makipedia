import React from 'react';
import '../assets/styles/components/carouselItem.scss';
import imgAmpliar from '../assets/static/ampliar.png';
import imgGuardar from '../assets/static/guardar.png';

const CarouselItem = ({ titulo, descripcion, source }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={source} alt="Maki 1" />
      <div className="carousel-item__details">
        <div className="carousel-item__details--img">
          <img src={imgAmpliar} alt="Ampliar" />
          <img src={imgGuardar} alt="Guardar" />
        </div>
        <p className="carousel-item__details--title">{titulo}</p>
        <p className="carousel-item__details--subtitle">{descripcion}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
