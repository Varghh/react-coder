import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article style={styles.card}>
      <img 
        src={img} 
        alt={name}
        style={styles.img}
      />
      <div style={styles.content}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.price}>${price.toLocaleString()}</p>
        <p style={styles.stock}>Stock disponible: {stock}</p>
        <Link 
          to={`/item/${id}`}
          style={styles.button}
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  content: {
    marginTop: '1rem'
  },
  title: {
    fontSize: '1.1rem',
    margin: '0.5rem 0'
  },
  price: {
    color: '#2c5282',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    margin: '0.5rem 0'
  },
  stock: {
    color: '#666',
    fontSize: '0.9rem',
    margin: '0.5rem 0'
  },
  button: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3182ce',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  }
};

export default Item;