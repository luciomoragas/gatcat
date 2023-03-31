import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { context } from '../../context/CartContext';

export const CartWidget = () => {
  const { cartLength } = useContext(context);

  return (
    <>
      <FontAwesomeIcon
        icon={faShoppingBag}
        className='navbar__shopping-cart'
      />
      <span className='navbar__shopping-cart'>
        {cartLength > 0 && cartLength}
      </span>
    </>
  );
};
