import Contador from '../Contador/Contador';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './ItemDetail.css'

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
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
                    <h3>Stock: {stock}</h3>
                    <h3 className='price'>Precio: ${price}</h3>
                    <h3>Categoria: {category}</h3>
                </div>
                
                {
                    isInCart(id) ? (
                        <div>
                            <Link className='terminar' to='/cart'>Terminar compra</Link>
                            <Link className='terminar' to='/'>Seguir comprando</Link>
                        </div> ) : (
                        <Contador onAdd={handleOnAdd} max={stock} />
                    )
                }
            </div>
        </div>
    )
}
export default ItemDetail;