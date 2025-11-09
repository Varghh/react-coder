import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega productos para comenzar tu compra!</p>
        <Link to='/' style={styles.shopButton}>
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Tu Carrito</h1>
      
      <div style={styles.items}>
        {cart.map(prod => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>

      <div style={styles.summary}>
        <h3 style={styles.total}>
          Total: ${getTotal().toLocaleString()}
        </h3>
        
        <div style={styles.buttons}>
          <button 
            onClick={clearCart}
            style={styles.clearButton}
          >
            Vaciar carrito
          </button>
          
          <Link to='/checkout' style={styles.checkoutButton}>
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem'
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '4rem 2rem'
  },
  shopButton: {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#3182ce',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  },
  items: {
    marginTop: '2rem'
  },
  summary: {
    marginTop: '2rem',
    borderTop: '2px solid #ddd',
    paddingTop: '2rem'
  },
  total: {
    fontSize: '1.8rem',
    color: '#2c5282',
    marginBottom: '1rem'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  },
  clearButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  checkoutButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#48bb78',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default Cart;