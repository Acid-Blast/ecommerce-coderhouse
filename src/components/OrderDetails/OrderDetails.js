import { getOrder } from "../../services/firebase/orders"
import { useState, useEffect } from "react";
import { sweetAlert } from "../../services/sweetAlert/sweetAlert";
import { useParams } from "react-router-dom";
import './OrderDetails.css'


const OrderDetails = () => {
    const [newOrder, setNewOrder] = useState([]);
    const [orderCart, setOrderCart] = useState([])
    const { orderId } = useParams()


    useEffect(() => {
        getOrder(orderId)
            .then(adaptedOrder => {
                setNewOrder(adaptedOrder)
                setOrderCart(adaptedOrder.items)
            })
            .catch(error => sweetAlert('Error', `${error}`, 'error'))
    }, [orderId])

    return (
        <div className="order-container">
            <h1>Detalles de la orden</h1>
            <div className="order__data">
                <h2><span className="whiteshadow">Codigo de orden: </span>{orderId}</h2>
                <h3><span className="whiteshadow">Fecha: </span>{newOrder.date}</h3>
                <h3><span className="whiteshadow">Nombre: </span>{newOrder.name} {newOrder.lastname}</h3>
                <h3><span className="whiteshadow">Mail: </span>{newOrder.email}</h3>
                <h3><span className="whiteshadow">Telefono: </span>{newOrder.phone}</h3>
                <h3><span className="whiteshadow">Dirección de entrega: </span>{newOrder.address}</h3>
                {
                    newOrder.comments !== "" && <h3><span className="whiteshadow">Comentarios: </span>{newOrder.comments}</h3>
                }
            </div>

            <ul className="order__list">
                <li className="order__list__item order__list__header">
                    <p>Producto</p>
                    <p>Subtotal</p>
                </li>
            {
            orderCart.map(item => (
                <li key={item.id} className="order__list__item">
                    <p>{item.name} x{item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                </li>
            ))
            }
                <li className="order__list__total"><h3>Total: ${newOrder.total}</h3></li>
            </ul>

            <p>
                El pedido ya está listo! Pronto recibiras un correo con los detalles de la orden y el envio.
            </p>

                <img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/logo.png?alt=media&token=8d281d3f-3244-4ab5-8c7d-8e905b4e9820"></img>
        </div>
    )
}

export default OrderDetails;