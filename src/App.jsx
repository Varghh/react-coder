import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
    return (
    <div className="App">
      <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
      <NavBar />
    </div>
  )
}

export default App
