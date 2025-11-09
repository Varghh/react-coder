import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id,
      name,
      price,
      img
    };
    
    addItem(item, quantity);
    
    console.log(`✅ Agregaste ${quantity} unidades de ${name} al carrito`);
  };

  return (
    <article style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={img} 
          alt={name}
          style={styles.img}
        />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.category}>Categoría: {category}</p>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>${price.toLocaleString()}</p>
        <p style={styles.stock}>Stock disponible: {stock}</p>
        
        {
          quantityAdded > 0 ? (
            <div style={styles.addedContainer}>
              <p style={styles.addedText}>
                ✓ Agregaste {quantityAdded} unidad(es) al carrito
              </p>
              <Link to='/cart' style={styles.cartLink}>
                Ir al carrito
              </Link>
              <Link to='/' style={styles.continueLink}>
                Seguir comprando
              </Link>
            </div>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </div>
    </article>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  imageContainer: {
    flex: 1
  },
  img: {
    width: '100%',
    borderRadius: '8px',
    objectFit: 'cover'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  category: {
    color: '#666',
    textTransform: 'capitalize',
    marginBottom: '1rem'
  },
  description: {
    marginBottom: '1rem',
    lineHeight: 1.6
  },
  price: {
    fontSize: '1.8rem',
    color: '#2c5282',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  stock: {
    color: '#666',
    marginBottom: '1.5rem'
  },
  addedContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem'
  },
  addedText: {
    color: '#48bb78',
    fontWeight: 'bold'
  },
  cartLink: {
    padding: '0.75rem 2rem',
    backgroundColor: '#48bb78',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  continueLink: {
    padding: '0.75rem 2rem',
    backgroundColor: '#3182ce',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default ItemDetail;