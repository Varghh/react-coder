import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to='/' style={styles.brand}>
        🐾 Perrito con chaucha store
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
    padding: '1.2rem 2.5rem',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8C42 100%)',
    color: 'white',
    boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  brand: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s'
  },
  menu: {
    display: 'flex',
    gap: '1.5rem',
    flex: 1,
    justifyContent: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)'
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.25)',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  }
};

export default NavBar;