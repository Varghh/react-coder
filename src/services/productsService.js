import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const getProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('category', '==', categoryId));
    const snapshot = await getDocs(q);
    
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return products;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    throw error;
  }
};

