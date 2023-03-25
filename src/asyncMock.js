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
        name: 'Kit Vinilos', 
        price: 1200, 
        category: 'kit', 
        img: img1, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '2',
        name: 'Separadores', 
        price: 800, 
        category: 'kit', 
        img: img2, 
        stock: 15, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '3', 
        name: 'Set jardtin', 
        price: 1200, 
        category: 'kit', 
        img:img3, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '4',
        name: 'Portallaves', 
        price: 800, 
        category: 'maderas', 
        img:img4, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '5', 
        name: 'Barbijos', 
        price: 1200, 
        category: 'telas', 
        img: img5, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '6',
        name: 'Vinilo horarios', 
        price: 800, 
        category: 'vinilos', 
        img: img6, 
        stock: 16, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '7', 
        name: 'Cartucheras', 
        price: 1200, 
        category: 'telas', 
        img: img7, 
        stock: 10, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '8',
        name: 'Servilletero', 
        price: 800, 
        category: 'maderas', 
        img: img8, 
        stock: 13, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    },
    { 
        id: '9', 
        name: 'Llaveros', 
        price: 1200, 
        category: 'vinilos', 
        img: img9, 
        stock: 1, 
        description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 1000);
    });
}

//funcion que reciba un id y solo envie el obj con ese id
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products.find(prod => prod.id === productId));
        }, 1000);
    });
}