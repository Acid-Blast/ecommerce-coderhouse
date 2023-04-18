import { createContext, useState, useContext } from 'react';

const CartContext = createContext('asdasdsad')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log('carContext Montado', cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
            console.log(productToAdd, cart)
        } else {
            console.log('No se agrega porque ya esta en el carrito')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
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