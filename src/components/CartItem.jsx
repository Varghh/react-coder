import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article 
      style={styles.container}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(4px)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
      }}
    >
      <img 
        src={img} 
        alt={name}
        style={styles.img}
      />
      
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.price}>Precio: ${price.toLocaleString()}</p>
        <p style={styles.quantity}>Cantidad: {quantity}</p>
        <p style={styles.subtotal}>
          Subtotal: ${(price * quantity).toLocaleString()}
        </p>
      </div>

      <button 
        onClick={() => removeItem(id)}
        style={styles.removeButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(229, 62, 62, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(229, 62, 62, 0.3)';
        }}
      >
        ✕ Eliminar
      </button>
    </article>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: '#2d2d44',
    border: 'none',
    borderRadius: '12px',
    marginBottom: '1rem',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease'
  },
  img: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#e0e0e0',
    fontWeight: '600'
  },
  price: {
    color: '#b0b0b0',
    marginBottom: '0.3rem',
    fontSize: '0.95rem'
  },
  quantity: {
    color: '#b0b0b0',
    marginBottom: '0.3rem',
    fontSize: '0.95rem'
  },
  subtotal: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginTop: '0.5rem'
  },
  removeButton: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(229, 62, 62, 0.3)'
  }
};

export default CartItem;