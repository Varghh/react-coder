import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/productsService';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

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
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ color: '#b0b0b0', fontSize: '1.5rem' }}>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ 
        textAlign: 'center', 
        margin: '3rem 0 2rem 0',
        fontSize: '2.5rem',
        color: '#e0e0e0',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8C42 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {greeting}
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;