import React from 'react';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Buscador from '../components/Buscador';
import Footer from '../components/Footer';
import Categorias from '../components/Categorias';
import CarouselContenedor from '../components/CarouselContenedor';
import CarouselItem from '../components/CarouselItem';

const API = 'http://localhost:3000/initialState';

const crearCarrousel = (cadena) => {
  const carousel = [];
  const nombres = Object.keys(cadena);
  nombres.forEach((seccion) => {
    if (cadena[seccion].length > 0) {
      const hijos = [];
      for (let i = 0; i < cadena[seccion].length; i++) {
        hijos.push(
          cadena[seccion].map((item) => (
            <CarouselItem
              key={item.id}
              titulo={item.title}
              descripcion={item.description}
              source={item.source}
            />
          )),
        );
      }
      const nombreTitle = `Lista de cartas ${seccion.slice(8)}`;
      carousel.push(
        <Categorias key={seccion} title={nombreTitle}>
          <CarouselContenedor key={`${seccion}_hijo`}>{hijos}</CarouselContenedor>
        </Categorias>,
      );
    }
  });
  console.log(carousel);
  return carousel;
};

const App = () => {
  let carouselHtml;
  const imagenes = useInitialState(API);
  if (imagenes !== undefined) {
    carouselHtml = crearCarrousel(imagenes);
  }

  return (
    <div className="App">
      <Header />
      <Buscador />
      {carouselHtml}
      <Footer />
    </div>
  );
};

export default App;
