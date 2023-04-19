import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()    

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        setLoading(true)
        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => console.log(error))
            .finally(() => (setLoading(false)))

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