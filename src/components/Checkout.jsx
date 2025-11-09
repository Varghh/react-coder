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

      // Agregar la orden a Firestore
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
        <h2>Procesando compra...</h2>
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
          <Link to='/' style={styles.homeButton}>
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
        <h3>Datos de contacto</h3>
        
        <div style={styles.field}>
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
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
    padding: '2rem'
  },
  summary: {
    backgroundColor: '#f7fafc',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    color: '#1a202c'
  },
  summaryTitle: {
    color: '#1a202c',
    marginTop: 0,
    marginBottom: '1rem'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #e2e8f0',
    color: '#1a202c'
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    fontSize: '1.3rem',
    marginTop: '1rem',
    color: '#1a202c'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #cbd5e0',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  submitButton: {
    padding: '1rem 2rem',
    backgroundColor: '#48bb78',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  success: {
    textAlign: 'center',
    padding: '3rem'
  },
  orderId: {
    backgroundColor: '#f7fafc',
    padding: '1rem',
    borderRadius: '8px',
    color: '#2c5282',
    margin: '1rem 0'
  },
  homeButton: {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#3182ce',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default Checkout;