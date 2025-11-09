import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            {/* Ruta principal - muestra todos los productos */}
            <Route 
              path='/' 
              element={<ItemListContainer greeting="¡Bienvenidos a mi tienda!" />} 
            />
            
            {/* Ruta para categorías - muestra productos filtrados */}
            <Route 
              path='/category/:categoryId' 
              element={<ItemListContainer greeting="Productos" />} 
            />
            
            {/* Ruta para detalle de producto */}
            <Route 
              path='/item/:itemId' 
              element={<ItemDetailContainer />} 
            />
            
            {/* Ruta para el carrito */}
            <Route 
              path='/cart' 
              element={<Cart />} 
            />
            
            {/* Ruta para checkout */}
            <Route 
              path='/checkout' 
              element={<Checkout />} 
            />
            
            {/* Ruta 404 - página no encontrada */}
            <Route 
              path='*' 
              element={
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <h1>404</h1>
                  <p>Página no encontrada</p>
                </div>
              } 
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;