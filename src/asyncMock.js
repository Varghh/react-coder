const products = [
    // Categoría: Alimento
    {
      id: '1',
      name: 'Alimento Premium para Perros',
      price: 15000,
      category: 'alimento',
      img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
      stock: 10,
      description: 'Alimento balanceado premium para perros adultos de todas las razas.'
    },
    {
      id: '2',
      name: 'Alimento para Gatos',
      price: 12000,
      category: 'alimento',
      img: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400',
      stock: 15,
      description: 'Alimento nutritivo para gatos con proteínas de alta calidad.'
    },
    {
      id: '3',
      name: 'Snacks para Perros',
      price: 3500,
      category: 'alimento',
      img: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400',
      stock: 25,
      description: 'Deliciosos snacks naturales para premiar a tu perro.'
    },
  
    // Categoría: Higiene
    {
      id: '4',
      name: 'Shampoo para Perros',
      price: 4500,
      category: 'higiene',
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
      stock: 20,
      description: 'Shampoo hipoalergénico con fragancia suave y duradera.'
    },
    {
      id: '5',
      name: 'Cepillo Dental',
      price: 2800,
      category: 'higiene',
      img: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400',
      stock: 30,
      description: 'Cepillo dental para mantener la higiene bucal de tu mascota.'
    },
    {
      id: '6',
      name: 'Arena para Gatos',
      price: 5500,
      category: 'higiene',
      img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
      stock: 18,
      description: 'Arena absorbente con control de olores para gatos.'
    },
  
    // Categoría: Juguetes
    {
      id: '7',
      name: 'Pelota de Goma',
      price: 1500,
      category: 'juguetes',
      img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=400',
      stock: 40,
      description: 'Pelota resistente ideal para jugar y ejercitar a tu perro.'
    },
    {
      id: '8',
      name: 'Ratón de Juguete',
      price: 1200,
      category: 'juguetes',
      img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
      stock: 35,
      description: 'Ratón de tela con catnip para que tu gato se divierta.'
    },
    {
      id: '9',
      name: 'Cuerda para Perros',
      price: 2000,
      category: 'juguetes',
      img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
      stock: 22,
      description: 'Cuerda resistente para jugar al tira y afloja.'
    }
  ];
  
  // Función que simula obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simula 1 segundo de espera
    });
  };
  
  // Función que simula obtener productos por categoría
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 1000);
    });
  };
  
  // Función que simula obtener un producto por ID
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 1000);
    });
  };