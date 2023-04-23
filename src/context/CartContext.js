import { createContext, useState, useContext } from 'react';
import { sweetAlert } from '../services/sweetAlert/sweetAlert';


const CartContext = createContext('')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem('cart')) || [])
    localStorage.setItem('cart', JSON.stringify(cart))

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
            localStorage.setItem('cart', JSON.stringify(cart))
            sweetAlert('Producto agregado al carrito', `Se agregó correctamente ${productToAdd.name} x ${productToAdd.quantity}`, 'success')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}