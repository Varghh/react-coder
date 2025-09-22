import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav style= {{display: 'flex', alignItems: 'center', padding: '1rem'}}>
            <div>
                <button>Inicio</button>
                <button>Alimento</button>
                <button>Higiene</button>
                <button>Juguetes</button>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar