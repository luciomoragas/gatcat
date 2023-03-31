import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemCount } from './ItemCount';
import { context } from '../../context/CartContext';

export const ItemDetailCard = ({ item }) => {
  const [hideShopCart, setHideShopCart] = useState(false);

  const { addItem, removeItem, isInCart } =
    useContext(context);

  const onAdd = (count) => {
    if (count > 0) {
      const checkCart = isInCart(item.id);

      if (!checkCart) {
        addItem(item, count, false);
        setHideShopCart(true);
      } else {
        alert('Objeto agregado previamente. Primero elimine el objeto, después agréguelo otra vez.');
      }
    } else {
      setHideShopCart(false);
    }
  };

  const handleRemoveItem = () => {
    removeItem(item.id);
    setHideShopCart(false);
  };

  const index = item.index;

  return (
    <div className='card-detail'>
      <div className='card-detail-list'>
        <div className='card-info'>
          <h3>FOTO</h3>
          <h3>PRODUCTO</h3>
          <h3>PRECIO</h3>
          <h3 className={hideShopCart ? 'card-info__detaild-hide' : ''}>
            CANTIDAD
          </h3>
        </div>
        <div className='card-info'>
          <img
            className='card-info__picture'
            src={item.pictureUrl}
            alt={item.titulo}
          />
          <div>
            <h3 className='card-info__title'>{item.titulo}</h3>

          </div>
          <p className='card-info__price'>${item.precio}</p>
          {!hideShopCart && <ItemCount initial={1} stock={10} onAdd={onAdd} />}
          <button className='cart-card__button' onClick={handleRemoveItem}>
            Quitar compra
          </button>
        </div>
      </div>
      <div className='card-buttons'>
        {hideShopCart && (
          <Link to='/cart'>
            <button className='card-buttons-info one'>Terminar compra</button>
          </Link>
        )}
      </div>
    </div>
  );
};