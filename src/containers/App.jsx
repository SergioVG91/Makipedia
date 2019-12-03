import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Buscador from '../components/Buscador';
import Categorias from '../components/Categorias';
import CarouselContenedor from '../components/CarouselContenedor';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Buscador />
    <Categorias title="Lista de Cartas UR">
      <CarouselContenedor>
        <CarouselItem numImg="0" tipo="UR" />
        <CarouselItem numImg="1" tipo="UR" />
        <CarouselItem numImg="2" tipo="UR" />
        <CarouselItem numImg="3" tipo="UR" />
        <CarouselItem numImg="4" tipo="UR" />
        <CarouselItem numImg="5" tipo="UR" />
        <CarouselItem numImg="6" tipo="UR" />
      </CarouselContenedor>
    </Categorias>
    <Categorias title="Lista de Cartas SSR">
      <CarouselContenedor>
        <CarouselItem numImg="0" tipo="SSR" />
        <CarouselItem numImg="1" tipo="SSR" />
        <CarouselItem numImg="2" tipo="SSR" />
        <CarouselItem numImg="3" tipo="SSR" />
        <CarouselItem numImg="4" tipo="SSR" />
        <CarouselItem numImg="5" tipo="SSR" />
      </CarouselContenedor>
    </Categorias>
    <Footer />
  </div>
);

export default App;
