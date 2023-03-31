import React from 'react';
import { Link } from 'react-router-dom';

import { CartWidget } from '../cart/CartWidget';

export const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
      <Link to='/' className='navbar__title'>
  <img src='https://i.postimg.cc/3JXvySgk/logoglobal.png' alt='Logo' />
</Link>
        <ul className='navbar__list'>
          <Link to='/' className='navbar__list-item'>
            Home
          </Link>
          <Link to='/category/baile' className='navbar__list-item'>
            Baile
          </Link>
          <Link to='/category/cocina' className='navbar__list-item'>
            Cocina
          </Link>
          <Link to='/category/idiomas' className='navbar__list-item'>
            Idiomas
          </Link>
          <Link to='/cart' className='navbar__list-item'>
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
