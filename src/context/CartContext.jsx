import { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});

// Provider del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log('Cart actual:', cart);

  // Agregar producto al carrito
  const addItem = (item, quantity) => {
    // Verificar si el producto ya está en el carrito
    if (!isInCart(item.id)) {
      // Si no está, agregarlo
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      // Si ya está, actualizar la cantidad
      setCart(prev => 
        prev.map(prod => 
          prod.id === item.id 
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    }
  };

  // Remover producto del carrito
  const removeItem = (itemId) => {
    setCart(prev => prev.filter(prod => prod.id !== itemId));
  };

  // Limpiar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Verificar si un producto está en el carrito
  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  // Obtener cantidad total de productos
  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  // Obtener precio total del carrito
  const getTotal = () => {
    return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      getTotalQuantity,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};