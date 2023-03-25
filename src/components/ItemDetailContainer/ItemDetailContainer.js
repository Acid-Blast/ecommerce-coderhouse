import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts, getProductsById } from '../../asyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';


 
const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const param = useParams();
    console.log(param == "itemId")

    useEffect( () => {  
        getProductsById(param.itemId)
            .then(product =>{
                setProducts(product);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer;