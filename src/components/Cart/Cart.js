import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import img from '../CartWidget/assets/cart.png'

import './Cart.css'

const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCart()

    return (
        <div className="cart-container">
            <img src={img} alt="carrito"/>
            <h1 className="title">Carrito</h1>
            <div className="product-list">
                {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="details-container">
                            
                            <img src={prod.img} alt={prod.name} title={prod.name}/>
                            <h3>{prod.name} x {prod.quantity}</h3>
                            <h3 id="precioUnitario">${prod.price} c/u</h3>
                            <h3>${prod.price * prod.quantity}</h3>
                            <button className="btn-remove-item" onClick={() => removeItem(prod.id)}>Eliminar</button>
                            
                        </div>
                    )
                })
                }
            </div>

            <h2>Total: ${total}</h2>
            <button className="btn-order clearCart" onClick={clearCart}>Vaciar carrito</button>

            
            <Link to='/checkout' className="btn-order">Generar Orden</Link>
        </div>
    )
}

export default Cart