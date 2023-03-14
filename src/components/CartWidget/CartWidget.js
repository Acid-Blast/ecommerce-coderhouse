import './CartWidget.css'
import cart from './assets/cart.png'


const CartWidget = () => {
    return(
        <div className='cartWidget-container'>
            <img src={cart} alt="Carrito" className='cart-img'/>
            <h3> 0 </h3>
        </div>
    );
}

export default CartWidget;