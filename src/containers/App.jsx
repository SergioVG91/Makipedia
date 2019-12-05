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

const existe = (cadena) => {
  if (cadena.length > 0) return true;
  return false;
};

const App = () => {
  let existeUR = false;
  let existeSR = false;
  let existeSSR = false;
  const imagenes = useInitialState(API);
  if (imagenes !== undefined) {
    existeUR = existe(imagenes.imagenesUR);
    existeSR = existe(imagenes.imagenesSR);
    existeSSR = existe(imagenes.imagenesSSR);
  }

  return (
    <div className="App">
      <Header />
      <Buscador />
      {existeUR && (
        <Categorias title="Lista de Cartas UR">
          <CarouselContenedor>
            {imagenes.imagenesUR.map((item) => (
              <CarouselItem
                key={item.id}
                titulo={item.title}
                descripcion={item.description}
                source={item.source}
              />
            ))}
          </CarouselContenedor>
        </Categorias>
      )}
      {existeSSR && (
        <Categorias title="Lista de Cartas SSR">
          <CarouselContenedor>
            {imagenes.imagenesSSR.map((item) => (
              <CarouselItem
                key={item.id}
                titulo={item.title}
                descripcion={item.description}
                source={item.source}
              />
            ))}
          </CarouselContenedor>
        </Categorias>
      )}
      {existeSR && (
        <Categorias title="Lista de Cartas SR">
          <CarouselContenedor>
            {imagenes.imagenesSR.map((item) => (
              <CarouselItem
                key={item.id}
                titulo={item.title}
                descripcion={item.description}
                source={item.source}
              />
            ))}
          </CarouselContenedor>
        </Categorias>
      )}
      <Footer />
    </div>
  );
};

export default App;
