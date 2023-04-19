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
                            <img src={prod.img} alt={prod.name} title={prod.name}/>
                            <h3>{prod.name} x {prod.quantity}</h3>
                            <h3>${prod.price} c/u</h3>
                            <h3>${prod.price * prod.quantity}</h3>
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