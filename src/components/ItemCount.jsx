import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <button 
          style={styles.button}
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <h4 style={styles.quantity}>{quantity}</h4>
        <button 
          style={styles.button}
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <div>
        <button 
          style={styles.addButton}
          onClick={() => onAdd(quantity)}
          disabled={stock <= 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    margin: '1rem 0'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  button: {
    width: '40px',
    height: '40px',
    fontSize: '1.5rem',
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  quantity: {
    margin: 0,
    fontSize: '1.5rem',
    minWidth: '40px',
    textAlign: 'center'
  },
  addButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#48bb78',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default ItemCount;