import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from './ItemList';
import { collectionProducts, getItemsFromDb } from '../../firebase/firebase';
import { query, where } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlParams = useParams();
  const urlIdParams = urlParams.id;

  useEffect(() => {
    setLoading(true);
    if (urlIdParams !== undefined) {
      // Convertir la primer letra de la categoria de minúscula a mayúscula para que coincida con la category/brand de la base de datos
      const urlIdParams =
        urlParams.id[0].toUpperCase() + urlParams.id.substring(1);

      const filterByCategory = query(
        collectionProducts,
        where('tipoDeCurso', '==', urlIdParams)
      );
      getItemsFromDb(filterByCategory, setItems, setLoading);
    } else {
      getItemsFromDb(collectionProducts, setItems, setLoading);
    }
  }, [urlParams.id, urlIdParams]);

  if (loading) return <h1 className='loading'>Loading...</h1>;

  return (
    <section className='home'>
      <div className='container-example'>
        <ItemList items={items} />
      </div>
    </section>
  );
};


