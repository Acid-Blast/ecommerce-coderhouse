import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const param = useParams()
    console.log(param)

    useEffect( () => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])

    
    return (
        <div className='itemListContainer'>
            <ItemList products={products} txt="Novedades"/>
        </div>
    );
}


export default ItemListContainer;