import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, 'products');

    // Si hay categoría, filtrar. Si no, traer todos
    const q = categoryId 
      ? query(productsRef, where('category', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;