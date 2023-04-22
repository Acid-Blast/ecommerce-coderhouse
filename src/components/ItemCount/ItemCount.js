import { useState } from 'react';

import './ItemCount.css';

const ItemCount = ({max, onAdd, price }) => {

    const [count, setCount] = useState(1);

    const sumar = () => count < max && setCount(prev => prev + 1);
    
    const restar = () => count > 1 && setCount(prev => prev - 1);

    return(
        <div className='count-container'>
            <div className='contador'>
                <button onClick={restar}> - </button>
                <h3>{count}</h3>
                <button onClick={sumar}> + </button>
            </div>
            <h3>Total: ${count *  price}</h3>
            <button className='btn-addToCart' onClick={() => onAdd(count)}>Agregar <img src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/cart.png?alt=media&token=9383e64d-6233-42db-bbd2-f57af65dcf91" alt="logo"/></button>
        </div>
    )
}
export default ItemCount;