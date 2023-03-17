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
            <div className='logo-container'>
                <div className='logo-banner'>
                    <img className='logo' src={img} alt='logo'/>
                    <h2 className="txt">{props.greeting}</h2>
                </div>
    
            </div>
            <ItemList products={products} txt="Destacados"/>
        </div>
    );
}


export default ItemListContainer;