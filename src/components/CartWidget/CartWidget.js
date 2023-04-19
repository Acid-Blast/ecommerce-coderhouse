import cartImg from './assets/cart.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <Link to='/cart' className='cartWidget-container' title={`carrito (${totalQuantity})`}>
            <button className='cart-btn'>
                <img src={cartImg} alt="Carrito" className='cart-img'/>
            </button>
            <div className='number'>
                <h3> {totalQuantity} </h3>
            </div>
        </Link>
    );
}


export default CartWidget;