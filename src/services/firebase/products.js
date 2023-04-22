import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { createProductFromFirebase } from '../../adapters/createProductFromFirestore';


export const getProducts = (categoryId) => {
        const productsRef = categoryId
            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
            :  collection(db, 'Productos')

        return getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    return createProductFromFirebase(doc)
                }) 
                return productsAdapted;
            })
            .catch(error => {
                return error;
            })
}

export const getProductsById = (itemId) =>{
    const productref = doc(db, 'Productos', itemId);
    return getDoc(productref)
            .then(snapshot => {
                return createProductFromFirebase(snapshot)
            })
            .catch(error => {
                return error
            })
}