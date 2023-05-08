import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock, description}) => {
    const { addItem, isInCart } = useCart()
    const [comment, setComment] = useState('Sin comentarios sobre el producto...')

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img, comment
        }
        addItem(productToAdd)
    }

    return( 
        <div className='itemDetail'>
            <div className='img-container'>
                <img src={img} alt={name}/>
            </div>
            <div className='info-container'>
                <h2>{name}</h2>
                <p>{description}</p>
                
                <div className='info-detail'>
                    <h3 className='price'>Precio: ${price}</h3>
                    <h3>Unidades disponibles: {stock}</h3>
                </div>
                
                {
                    isInCart(id) ? (
                        <div className='btns-terminar'>
                            <Link className='terminar' to='/'>Seguir comprando</Link>
                            <Link className='terminar' to='/cart'>Terminar compra</Link>
                        </div>
                        ) : (
                            stock !== 0 
                                ?
                                <>
                                    <label>Descripción del pedido:</label>
                                    <textarea name='comment' onChange={(e) => setComment(e.target.value)}/>
                                    <ItemCount onAdd={handleOnAdd} max={stock} price={price}/>
                                </>
                                : <h3>Sin stock</h3>
                        ) 
                }
            </div>
        </div>
    )
}
export default ItemDetail;