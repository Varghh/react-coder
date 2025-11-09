import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/productsService';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams(); // Lee la categoría de la URL

  useEffect(() => {
    setLoading(true);

    // Si hay categoría, filtra. Si no, muestra todos
    const fetchProducts = categoryId 
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchProducts
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); // Se ejecuta cada vez que cambia la categoría

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