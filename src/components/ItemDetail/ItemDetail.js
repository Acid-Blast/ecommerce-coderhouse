import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock, description}) => {
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img
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
                    isInCart(id) 
                        ? (
                        <div className='btns-terminar'>
                            <Link className='terminar' to='/'>Seguir comprando</Link>
                            <Link className='terminar' to='/cart'>Terminar compra</Link>
                        </div>
                        ) : (
                            stock !== 0 
                                ? <ItemCount onAdd={handleOnAdd} max={stock} price={price}/>
                                : <h3>Sin stock</h3>
                        )
                }
            </div>
        </div>
    )
}
export default ItemDetail;