import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

import './Cart.css'

const Cart = () => {
    const { cart, total } = useCart()

    return (
        <div className="cart-container">
            <h1 className="title">Carrito</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="details-container">
                            <h2>{prod.name} x {prod.quantity}</h2>
                            <h2>${prod.price} c/u</h2>
                            <h2>${prod.price * prod.quantity}</h2>
                        </div>
                    )
                })
            }

            <h2>Total: ${total}</h2>
            <Link to='/checkout' className="btn-order">Generar Orden</Link>
        </div>
    )
}

export default Cart