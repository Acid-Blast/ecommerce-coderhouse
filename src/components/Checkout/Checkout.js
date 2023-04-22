import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from 'react'
import { sweetAlert } from "../../services/sweetAlert/sweetAlert"
import ContactForm from "../ContactForm/ContactForm"

import './Checkout.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()



    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'Productos'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(ordersRef, objOrder)
                
                clearCart()
                setOrderId(orderAdded.id)

                sweetAlert('Orden creada', `La orden ha sido creada con exito`, 'success')

            } else {
                sweetAlert('Error','No hay stock de algunos productos', 'error')
            }
        } catch (error) {
            sweetAlert('Error','Error inesperado, intente nuevamente', 'error')
        } finally {
            setLoading(false)
        } 
    }

    if(loading) {
        return (
            <div className="fillScreen">
                <h1>Se esta generando su orden...</h1>
            </div>
        )
    }

    if(orderId) {
        return (
            <div className="fillScreen orderView">
                <h1>Numero de Orden:</h1>
                <h2>{orderId}</h2>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h1>Finalizar orden</h1>
            <h2>Completa los datos de entrega</h2>
            <ContactForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout