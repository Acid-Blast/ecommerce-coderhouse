import img from '../Navbar/assets/logo.png';
import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])

    
    return (
        <div className='itemListContainer'>
            <h2 className="saludo">{props.greeting}</h2>
            <img className='logo-saludo' src={img} alt='logo'/>

            <ItemList products={products}/>
        </div>
    );
}


export default ItemListContainer;