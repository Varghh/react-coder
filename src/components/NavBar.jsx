import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to='/' style={styles.brand}>
        🐾 Mi Tienda de Mascotas
      </Link>
      
      <div style={styles.menu}>
        <NavLink 
          to='/'
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Inicio
        </NavLink>
        
        <NavLink 
          to='/category/alimento'
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Alimento
        </NavLink>
        
        <NavLink 
          to='/category/higiene'
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Higiene
        </NavLink>
        
        <NavLink 
          to='/category/juguetes'
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Juguetes
        </NavLink>
      </div>
      
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2d3748',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  menu: {
    display: 'flex',
    gap: '2rem',
    flex: 1,
    justifyContent: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: '#4a5568'
  }
};

export default NavBar;