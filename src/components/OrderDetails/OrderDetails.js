import { getOrder } from "../../services/firebase/orders"
import { useState, useEffect } from "react";
import { sweetAlert } from "../../services/sweetAlert/sweetAlert";
import { useParams } from "react-router-dom";


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
            <h1>Details</h1>
            <h2>{orderId}</h2>
            <h3>{newOrder.name}</h3>
            <h3>{newOrder.lastname}</h3>
            <h3>{newOrder.email}</h3>
            <h3>{newOrder.phone}</h3>
            <h3>{newOrder.address}</h3>
            <h3>{newOrder.date}</h3>
            <h3>{newOrder.comments}</h3>
            <h3>{newOrder.total}</h3>

            <ul>
            {
            orderCart.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </li>
            ))
            }
            </ul>
        </div>
    )
}

export default OrderDetails;