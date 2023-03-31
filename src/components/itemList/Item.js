import React from 'react';

export const Item = ({ titulo, descripcion, precio, pictureUrl }) => {
  return (
    <div className='card-container'>
      <h3 className='card-container__title'>{titulo}</h3>

      <img className='card-container__picture' src={pictureUrl} alt={titulo} />
      <p className='card-container__description'>{descripcion}</p>
      <p className='card-container__price'>${precio}</p>
    </div>
  );
};
