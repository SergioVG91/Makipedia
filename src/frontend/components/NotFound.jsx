import React from 'react';
import '../assets/styles/components/error404.scss';
import error404 from '../assets/static/error-404.png';

const NotFound = (props) => (
  <>
    <section className="error-404">
      <div className="error-404__caja">
        <div className="text animated bounce">Error 404</div>
      </div>
      <p>Página no encontrada</p>
      <img src={error404} alt="Error 404" />
      <button className="button--back" type="button" onClick={() => props.history.goBack()}>
        Regresar
      </button>
    </section>
  </>
);

export default NotFound;
