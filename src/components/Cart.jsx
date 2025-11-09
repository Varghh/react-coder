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
        <Link 
          to='/' 
          style={styles.shopButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
          }}
        >
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(229, 62, 62, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(229, 62, 62, 0.3)';
            }}
          >
            Vaciar carrito
          </button>
          
          <Link 
            to='/checkout' 
            style={styles.checkoutButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(78, 205, 196, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.3)';
            }}
          >
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
    padding: '2rem',
    color: '#e0e0e0'
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#2d2d44',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    maxWidth: '500px',
    margin: '2rem auto',
    color: '#e0e0e0'
  },
  shopButton: {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8C42 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
  },
  items: {
    marginTop: '2rem'
  },
  summary: {
    marginTop: '2rem',
    borderTop: '3px solid #3d3d54',
    paddingTop: '2rem',
    backgroundColor: '#2d2d44',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    color: '#e0e0e0'
  },
  total: {
    fontSize: '2rem',
    color: '#FF6B6B',
    marginBottom: '1.5rem',
    fontWeight: '700'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  },
  clearButton: {
    padding: '0.75rem 2rem',
    background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(229, 62, 62, 0.3)'
  },
  checkoutButton: {
    padding: '0.75rem 2rem',
    background: 'linear-gradient(135deg, #4ECDC4 0%, #20BF6B 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
  }
};

export default Cart;