import cart from './assets/cart.png'
import './CartWidget.css'

let num = 0;

const CartWidget = () => {
    return(
        <div className='cartWidget-container' title={num + " productos"}>
            <button className='cart-btn'><img src={cart} alt="Carrito" className='cart-img'/></button>
            <h3> {num} </h3>
        </div>
    );
}


export default CartWidget;