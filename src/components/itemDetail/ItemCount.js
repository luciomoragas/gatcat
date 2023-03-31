import React, { useState } from 'react';

export const ItemCount = ({
  initial: initialValue,
  stock,
  onAdd,
  titulo,
  prod,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleConfirm = () => {
    if (count > 0) {
      onAdd(count, prod);
    } else {
      alert('Ingrese una cantidad superior a 0');
    }
  };

  return (
    <div className='count-container'>
      <p className='count-container__title'>{titulo}</p>
      <div className='controls'>
        <button className='controls__button' onClick={handleSubstract}>
          -
        </button>
        <p className='controls__text'>{count}</p>
        <button className='controls__button' onClick={handleAdd}>
          +
        </button>
      </div>
      <button className='confirm-button' onClick={handleConfirm}>
        Confirmar
      </button>
    </div>
  );
};