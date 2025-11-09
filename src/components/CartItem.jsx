import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article style={styles.container}>
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
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '1rem',
    alignItems: 'center'
  },
  img: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem'
  },
  price: {
    color: '#666',
    marginBottom: '0.3rem'
  },
  quantity: {
    color: '#666',
    marginBottom: '0.3rem'
  },
  subtotal: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2c5282'
  },
  removeButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default CartItem;