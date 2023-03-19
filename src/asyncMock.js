import img1 from './assets/Screenshot_1.png'
import img2 from './assets/Screenshot_2.png'
import img3 from './assets/Screenshot_3.png'
import img4 from './assets/Screenshot_4.png'
import img5 from './assets/Screenshot_5.png'
import img6 from './assets/Screenshot_6.png'
import img7 from './assets/Screenshot_7.png'
import img8 from './assets/Screenshot_8.png'
import img9 from './assets/Screenshot_9.png'


const products = [
    { 
        id: '1', 
        name: 'Producto', 
        price: 1200, 
        category: 'celular', 
        img: img1, 
        stock: 25, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '2',
        name: 'Producto', 
        price: 800, 
        category: 'celular', 
        img: img2, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '3', 
        name: 'Producto', 
        price: 1200, 
        category: 'tablet', 
        img:img3, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '4',
        name: 'Producto', 
        price: 800, 
        category: 'celular', 
        img:img4, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '5', 
        name: 'Producto', 
        price: 1200, 
        category: 'tablet', 
        img: img5, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '6',
        name: 'Producto', 
        price: 800, 
        category: 'celular', 
        img: img6, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '7', 
        name: 'Producto', 
        price: 1200, 
        category: 'tablet', 
        img: img7, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '8',
        name: 'Producto', 
        price: 800, 
        category: 'celular', 
        img: img8, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    },
    { 
        id: '9', 
        name: 'Producto', 
        price: 1200, 
        category: 'tablet', 
        img: img9, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, tecto de prueba'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 1000);
    });
}