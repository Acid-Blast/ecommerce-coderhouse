import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()    

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => console.log(error))
            .finally(() => (setLoading(false)))

    }, [categoryId])

    if(loading) return <h1>Cargando...</h1>
    
    return (
        <div className='itemListContainer'>
            <ItemList 
                products={products} 
                txt={categoryId ? categoryId.toUpperCase() : "Todos nuestros productos"}
            />
        </div>
    );
}
export default ItemListContainer;