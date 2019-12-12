import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  user: {},
  playing: {},
  imagenesFavoritas: [],
  imagenesSR: [],
  imagenesUR: [
    {
      id: 'ur-1',
      title: 'Maki 1',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_1.jpg',
      description: 'Carta UR de Maki 1',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_1.jpg',
    },
    {
      id: 'ur-2',
      title: 'Maki 2',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_2.jpg',
      description: 'Carta UR de Maki 2',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_2.jpg',
    },
    {
      id: 'ur-3',
      title: 'Maki 3',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_3.jpg',
      description: 'Carta UR de Maki 3',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_3.jpg',
    },
    {
      id: 'ur-4',
      title: 'Maki 4',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_4.jpg',
      description: 'Carta UR de Maki 4',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_4.jpg',
    },
    {
      id: 'ur-5',
      title: 'Maki 5',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_5.jpg',
      description: 'Carta UR de Maki 5',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_5.jpg',
    },
    {
      id: 'ur-6',
      title: 'Maki 6',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_6.jpg',
      description: 'Carta UR de Maki 6',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_6.jpg',
    },
    {
      id: 'ur-7',
      title: 'Maki 7',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_7.jpg',
      description: 'Carta UR de Maki 7',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ur_7.jpg',
    },
  ],
  imagenesSSR: [
    {
      id: 'ssr-1',
      title: 'Maki 1',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_1.jpg',
      description: 'Carta SSR de Maki 1',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_1.jpg',
    },
    {
      id: 'ssr-2',
      title: 'Maki 2',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_2.jpg',
      description: 'Carta SSR de Maki 2',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_2.jpg',
    },
    {
      id: 'ssr-3',
      title: 'Maki 3',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_3.jpg',
      description: 'Carta SSR de Maki 3',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_3.jpg',
    },
    {
      id: 'ssr-4',
      title: 'Maki 4',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_4.jpg',
      description: 'Carta SSR de Maki 4',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_4.jpg',
    },
    {
      id: 'ssr-5',
      title: 'Maki 5',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_5.jpg',
      description: 'Carta SSR de Maki 5',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_5.jpg',
    },
    {
      id: 'ssr-6',
      title: 'Maki 6',
      type: 'Scripted',
      language: 'Español',
      cover:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_6.jpg',
      description: 'Carta SSR de Maki 6',
      source:
        'https://raw.githubusercontent.com/SergioVG91/Makipedia/master/src/assets/static/maki_ssr_6.jpg',
    },
  ],
};

const store = createStore(reducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
