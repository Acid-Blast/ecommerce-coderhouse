import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { sweetAlert } from '../../services/sweetAlert/sweetAlert';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()    

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true);

        const productsRef = categoryId
            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
            :  collection(db, 'Productos')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                }) 
                setProducts(productsAdapted);
            })
            .catch(error => {
                sweetAlert('Error', error, 'error');
            })
            .finally(() => setLoading(false))

        
        
    }, [categoryId])

    if(loading) return <Loader />
    
    return (
        <div className='itemListContainer'>
            <ItemList 
                products={products} 
                txt={categoryId ? categoryId.toUpperCase() : "Novedades"}
            />
        </div>
    );
}
export default ItemListContainer;
