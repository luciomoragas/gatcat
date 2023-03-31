import React, { useContext } from 'react';
import { context } from '../../context/CartContext';

export const CartListItem = ({ item }) => {
  const { removeItem } = useContext(context);

  const handleRemoveItem = (e) => {
    const idStringToNumber = e.target.value;
    removeItem(idStringToNumber);
  };

  return (
    <div className='cart-card'>
      <img
        className='cart-card__picture'
        src={item.selectedItem?.pictureUrl}
        alt={item.selectedItem?.titulo}
      />
      <h2 className='cart-card__title'>{item.selectedItem?.titulo}</h2>
      <p>{item.selectedQuantity}</p>
      <p className='cart-card__price'>
        ${(item.selectedItem?.precio * item.selectedQuantity).toFixed(3)}
      </p>
      <button
        className='cart-card__button'
        onClick={handleRemoveItem}
        value={item.selectedItem.id}
      >
        Eliminar
      </button>
    </div>
  );
};