import React from 'react';
import '../assets/styles/App.scss';
import { connect } from 'react-redux';
//import useInitialState from '../hooks/useInitialState';
import Buscador from '../components/Buscador';
import Categorias from '../components/Categorias';
import CarouselContenedor from '../components/CarouselContenedor';
import CarouselItem from '../components/CarouselItem';

const crearCarrousel = (cadena) => {
  const carousel = [];
  const nombres = Object.keys(cadena);
  nombres.forEach((seccion) => {
    if (cadena[seccion].length > 0) {
      const hijos = [];
      hijos.push(
        cadena[seccion].map((item) => {
          return (
            <CarouselItem
              key={item.id}
              titulo={item.title}
              descripcion={item.description}
              source={item.source}
            />
          );
        }),
      );
      const nombreTitle = `Lista de cartas ${seccion.slice(8)}`;
      carousel.push(
        <Categorias key={seccion} title={nombreTitle}>
          <CarouselContenedor key={`${seccion}_hijo`}>{hijos}</CarouselContenedor>
        </Categorias>,
      );
    }
  });
  return carousel;
};

const Home = ({ imagenesSR, imagenesSSR, imagenesUR }) => {
  let carouselHtml;
  const imagenes = [imagenesSR, imagenesSSR, imagenesUR];
  console.log(imagenes);
  if (imagenes !== undefined) {
    carouselHtml = crearCarrousel(imagenes);
  }

  return (
    <>
      <Buscador />
      {carouselHtml}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    imagenesSR: state.imagenesSR,
    imagenesSSR: state.imagenesSSR,
    imagenesUR: state.imagenesUR,
  };
};

export default connect(mapStateToProps, null)(Home);
