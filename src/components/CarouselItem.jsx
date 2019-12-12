import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, eliminarItem } from '../actions';
import '../assets/styles/components/carouselItem.scss';
import imgAgregar from '../assets/static/agregar.png';
import imgGuardar from '../assets/static/guardar.png';
import imgEliminar from '../assets/static/eliminar.png';

const CarouselItem = (props) => {
  const { id, title, description, source, esFavorito } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      key: id,
      id,
      title,
      description,
      source,
    });
  };
  const handleEliminar = (itemId) => {
    props.eliminarItem({
      itemId,
    });
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={source} alt="Maki 1" />
      <div className="carousel-item__details">
        <div className="carousel-item__details--img">
          <img src={imgGuardar} alt="Guardar" />
          {esFavorito ? (
            <img src={imgEliminar} alt="Eliminar" onClick={() => handleEliminar(id)} />
          ) : (
            <img src={imgAgregar} alt="Agregar" onClick={handleSetFavorite} />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{description}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  eliminarItem,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
