import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  
  const totalQuantity = getTotalQuantity();

  return (
    <Link to='/cart' style={styles.container}>
      <span style={styles.icon}>🛒</span>
      {totalQuantity > 0 && (
        <span style={styles.badge}>{totalQuantity}</span>
      )}
    </Link>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    padding: '0.6rem 1.2rem',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)'
  },
  icon: {
    fontSize: '1.6rem'
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(229, 62, 62, 0.4)',
    border: '2px solid white'
  }
};

export default CartWidget;