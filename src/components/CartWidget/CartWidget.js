import {useState} from 'react'
import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    const [cant, setCant] = useState(0);

    return(
        <div className='cartWidget-container' title={cant + " productos"}>
            <button className='cart-btn'>
                <img src={cart} alt="Carrito" className='cart-img'/>
            </button>

            <h3> {cant} </h3>
        </div>
    );
}


export default CartWidget;