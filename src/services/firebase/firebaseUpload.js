/*
import { db } from "./firebaseConfig"
import { collection, addDoc } from "firebase/firestore"


const products = [
        { 
            id: '1', 
            name: 'Kit Vinilos', 
            price: 1200, 
            category: 'sets', 
            img: 'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_1.png?alt=media&token=ceb05074-67c6-445f-a7eb-3c935046af7b', 
            stock: 10, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '2',
            name: 'Separadores', 
            price: 800, 
            category: 'sets', 
            img: 'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_2.png?alt=media&token=92cb281e-6869-48e1-bd2b-d625d19d465a', 
            stock: 15, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '3', 
            name: 'Set jardin', 
            price: 1200, 
            category: 'sets', 
            img: 'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_2.png?alt=media&token=92cb281e-6869-48e1-bd2b-d625d19d465a', 
            stock: 10, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '4',
            name: 'Portallaves', 
            price: 800, 
            category: 'maderas', 
            img: 'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_4.png?alt=media&token=a54756ea-864c-4c0c-907d-a904d702ef5e', 
            stock: 16, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '5', 
            name: 'Barbijos', 
            price: 1200, 
            category: 'telas', 
            img:  'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_5.png?alt=media&token=dfdadd9d-e68f-404f-8090-32f333c828b7', 
            stock: 10, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '6',
            name: 'Vinilo horarios', 
            price: 800, 
            category: 'vinilos', 
            img:  'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_6.png?alt=media&token=0b78cd24-bc64-4940-a031-2f9f2fad4ad4', 
            stock: 16, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '7', 
            name: 'Cartucheras', 
            price: 1200, 
            category: 'telas', 
            img:  'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_7.png?alt=media&token=b4136a2a-4960-4046-8bc4-97f85a6ba4ea', 
            stock: 10, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '8',
            name: 'Servilletero', 
            price: 800, 
            category: 'maderas', 
            img:  'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_8.png?alt=media&token=51bd554e-3e18-4642-89ab-138df5bbc83a', 
            stock: 13, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        },
        { 
            id: '9', 
            name: 'Llaveros', 
            price: 1200, 
            category: 'vinilos', 
            img:  'https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/Screenshot_9.png?alt=media&token=d40e647c-2369-45db-a130-9c71be27f820', 
            stock: 1, 
            description:'Descripción del producto. Texto de prueba, texto de prueba. Fin de descripcion.'
        }
]

const productosRef = collection(db, 'Productos')
export const upload = () => {
    products.forEach(item => delete item.id)
    products.forEach(item => addDoc(productosRef, item))

    console.log("upload")
}

setTimeout(() => {
    window.addEventListener("load", upload())
  }, 4000)


*/