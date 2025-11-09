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
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  },
  icon: {
    fontSize: '1.5rem'
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: '#e53e3e',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  }
};

export default CartWidget;