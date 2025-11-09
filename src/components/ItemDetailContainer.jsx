import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams(); // Lee el ID del producto desde la URL

  useEffect(() => {
    setLoading(true);

    // Referencia al documento específico en Firebase
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch(error => {
        console.error('Error al cargar producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]); // Se ejecuta cada vez que cambia el ID

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Cargando producto...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe o fue eliminado.</p>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;