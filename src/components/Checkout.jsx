import { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer: formData,
        items: cart,
        total: getTotal(),
        date: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar tu compra. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <h2 style={{ color: '#b0b0b0' }}>Procesando compra...</h2>
      </div>
    );
  }

  if (orderId) {
    return (
      <div style={styles.container}>
        <div style={styles.success}>
          <h2>✓ ¡Compra realizada con éxito!</h2>
          <p>Tu número de orden es:</p>
          <h3 style={styles.orderId}>{orderId}</h3>
          <p>Guarda este número para hacer seguimiento de tu pedido.</p>
          <Link 
            to='/' 
            style={styles.homeButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
            }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Finalizar Compra</h1>
      
      <div style={styles.summary}>
        <h3 style={styles.summaryTitle}>Resumen de tu compra</h3>
        {cart.map(prod => (
          <div key={prod.id} style={styles.item}>
            <span>{prod.name} x {prod.quantity}</span>
            <span>${(prod.price * prod.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div style={styles.total}>
          <strong>Total:</strong>
          <strong>${getTotal().toLocaleString()}</strong>
        </div>
      </div>

      <form onSubmit={createOrder} style={styles.form}>
        <h3 style={styles.formTitle}>Datos de contacto</h3>
        
        <div style={styles.field}>
          <label style={styles.label}>Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#FF6B6B';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.3)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#4d4d64';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#FF6B6B';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.3)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#4d4d64';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#FF6B6B';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.3)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#4d4d64';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <button 
          type="submit" 
          style={styles.submitButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(78, 205, 196, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.3)';
          }}
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '2rem',
    color: '#e0e0e0'
  },
  summary: {
    background: 'linear-gradient(135deg, #2d2d44 0%, #3d3d54 100%)',
    padding: '2rem',
    borderRadius: '16px',
    marginBottom: '2rem',
    color: '#e0e0e0',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
  },
  summaryTitle: {
    color: '#e0e0e0',
    marginTop: 0,
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    fontWeight: '600'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    borderBottom: '1px solid #4d4d64',
    color: '#e0e0e0',
    fontSize: '1rem'
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem 0',
    fontSize: '1.8rem',
    marginTop: '1rem',
    color: '#FF6B6B',
    fontWeight: '700',
    borderTop: '2px solid #4d4d64'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    backgroundColor: '#2d2d44',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    color: '#e0e0e0'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    color: '#e0e0e0',
    fontWeight: '500',
    fontSize: '0.95rem'
  },
  formTitle: {
    color: '#e0e0e0',
    marginTop: 0,
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '600'
  },
  input: {
    padding: '0.9rem',
    border: '2px solid #4d4d64',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: '#3d3d54',
    color: '#e0e0e0'
  },
  submitButton: {
    padding: '1.2rem 2rem',
    background: 'linear-gradient(135deg, #4ECDC4 0%, #20BF6B 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)',
    marginTop: '0.5rem'
  },
  success: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#2d2d44',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    color: '#e0e0e0'
  },
  orderId: {
    background: 'linear-gradient(135deg, #3d3d54 0%, #4d4d64 100%)',
    padding: '1.5rem',
    borderRadius: '12px',
    color: '#FF6B6B',
    margin: '1rem 0',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
  },
  homeButton: {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8C42 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
  }
};

export default Checkout;