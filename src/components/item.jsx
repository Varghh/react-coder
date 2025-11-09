import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.7)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
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
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(78, 205, 196, 0.3)';
          }}
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

const styles = {
  card: {
    border: 'none',
    borderRadius: '16px',
    padding: '0',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    backgroundColor: '#2d2d44',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  img: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '0',
    transition: 'transform 0.3s ease'
  },
  content: {
    marginTop: '0',
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
    color: '#e0e0e0',
    fontWeight: '600'
  },
  price: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: '0.5rem 0'
  },
  stock: {
    color: '#b0b0b0',
    fontSize: '0.9rem',
    margin: '0.5rem 0'
  },
  button: {
    display: 'inline-block',
    marginTop: 'auto',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #4ECDC4 0%, #20BF6B 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(78, 205, 196, 0.3)'
  }
};

export default Item;