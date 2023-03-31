import React from 'react';
import { Link } from 'react-router-dom';

import { Item } from './Item';

export const ItemList = ({ items }) => {
  return items?.map((item) => (
    <div key={item.id}>
      <Link to={`/item/${item.id}`} className='item-links'>
        <Item
          id={item.id}
          titulo={item.titulo}
          descripcion={item.descripcion}
          precio={item.precio}
          pictureUrl={item.pictureUrl}
        />
      </Link>
    </div>
  ));
};