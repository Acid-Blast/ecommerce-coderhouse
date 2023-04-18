import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';


 
const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const { itemId } = useParams();

    useEffect( () => {  
        getProductsById(itemId)
            .then(product =>{
                setProducts(product);
            })
            .catch(error => console.log(error))
    }, [itemId])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer;