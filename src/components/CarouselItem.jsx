import React from 'react';
import '../assets/styles/components/carouselItem.scss';
import { imagenesUR, imagenesSSR } from '../js/imagenes';
import imgAmpliar from '../assets/static/ampliar.png';
import imgGuardar from '../assets/static/guardar.png';

const CarouselItem = ({ numImg, tipo }) => {
  let imagen;
  if (tipo === 'UR') {
    imagen = imagenesUR[numImg];
  } else if (tipo === 'SSR') {
    imagen = imagenesSSR[numImg];
  }
  console.log(imagen);
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={imagen.src} alt="Maki 1" />
      <div className="carousel-item__details">
        <div className="carousel-item__details--img">
          <img src={imgAmpliar} alt="Ampliar" />
          <img src={imgGuardar} alt="Guardar" />
        </div>
        <p className="carousel-item__details--title">{imagen.title}</p>
        <p className="carousel-item__details--subtitle">{imagen.subtitle}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
