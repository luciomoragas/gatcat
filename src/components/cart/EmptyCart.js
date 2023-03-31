import React from 'react';
import { Link } from 'react-router-dom';

import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EmptyCart = ({ orderInfo }) => {
  return (
    <div className='cart-container'>
      <div className='cart__empty'>
        {orderInfo.length === 20 ? (
          <div className='cart__empty-order'>
            <h1 className='cart__empty-order__title'>Su compra se realizo con exito!</h1>
            <h2 className='cart__empty-order__id'>
              El id de su compra es: {orderInfo}
            </h2>
          </div>
        ) : (
          ''
        )}
        <div className='cart__empty-container'>
          <h2 className='cart__empty-subtitle'>No hay nada en tu carro</h2>
          <h2 className='cart__empty-button'>
            <Link to='/' className='cart__empty-link'>
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className='cart__empty-arrow'
              />
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
