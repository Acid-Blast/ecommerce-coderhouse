import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { sweetAlert } from '../../services/sweetAlert/sweetAlert';
import { getProducts } from '../../services/firebase/products';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()    

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch((error) => {
                sweetAlert('Error', `${error}`, 'error')
            })
            .finally(() => {
                setLoading(false)
            })
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
