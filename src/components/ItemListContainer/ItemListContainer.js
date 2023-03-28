import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()
    console.log(categoryId)
    console.log(products)


    useEffect( () => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => console.log(error))
    }, [categoryId])

    
    return (
        <div className='itemListContainer'>

            <ItemList products={products} txt={categoryId ? categoryId.toUpperCase() : "Todos nuestros productos"}/>
        </div>
    );
}

export default ItemListContainer;