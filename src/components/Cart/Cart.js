import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

import './Cart.css'

const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCart()

    return (
        <div className="cart-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/cart.png?alt=media&token=9383e64d-6233-42db-bbd2-f57af65dcf91" alt="carrito"/>
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
            {
                total 
                    ? 
                    <div className="fullCart-container">
                        <h2>Total: ${total}</h2>
                        <button className="btn-order clearCart" onClick={clearCart}>Vaciar carrito</button>
                        <Link to='/checkout' className="btn-order">Generar Orden</Link> 
                    </div> 
                    : <h2>Carrito vacio</h2>
            }
        </div>
    )
}
export default Cart