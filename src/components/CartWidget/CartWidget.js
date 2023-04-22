import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <Link to='/cart' className='cartWidget-container' title={`carrito (${totalQuantity})`}>
            <button className='cart-btn'>
                <img src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/cart.png?alt=media&token=9383e64d-6233-42db-bbd2-f57af65dcf91" alt="Carrito" className='cart-img'/>
            </button>
            <div className='number'>
                <h3> {totalQuantity} </h3>
            </div>
        </Link>
    );
}


export default CartWidget;