import cartImg from './assets/cart.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <Link to='/cart' className='cartWidget-container' title={totalQuantity + " productos"}>
            <button className='cart-btn'>
                <img src={cartImg} alt="Carrito" className='cart-img'/>
            </button>

            <h3> {totalQuantity} </h3>
        </Link>
    );
}


export default CartWidget;