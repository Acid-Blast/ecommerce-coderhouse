import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

import './ItemDetailContainer.css';


 
const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {  
        getProducts()
            .then(product =>{
                setProducts(product);
            })
    }, [])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...products[7]}/>
            <ItemDetail {...products[8]}/>
        </div>
    )
}
export default ItemDetailContainer;