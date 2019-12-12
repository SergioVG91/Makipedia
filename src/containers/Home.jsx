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
      let esFavorito = false;
      if (seccion === 'imagenesFavoritas') esFavorito = true;
      hijos.push(
        cadena[seccion].map((item) => {
          return (
            <CarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              source={item.source}
              esFavorito={esFavorito}
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

const Home = ({ imagenesFavoritas, imagenesSR, imagenesSSR, imagenesUR }) => {
  let carouselHtml;
  const imagenes = { imagenesFavoritas, imagenesSR, imagenesSSR, imagenesUR };
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
    imagenesFavoritas: state.imagenesFavoritas,
    imagenesSR: state.imagenesSR,
    imagenesSSR: state.imagenesSSR,
    imagenesUR: state.imagenesUR,
  };
};

export default connect(mapStateToProps, null)(Home);
