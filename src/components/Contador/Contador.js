import { useState } from 'react';
import logo from '../CartWidget/assets/cart.png'

import './Contador.css';

const Contador = ({max, onAdd }) => {

    const [count, setCount] = useState(1);

    const sumar = () => count < max && setCount(prev => prev + 1);
    
    const restar = () => count > 1 && setCount(prev => prev - 1);

    return(
        <div className='count-container'>
            <div className='contador'>
                <button onClick={sumar}> + </button>
                <h3> {count} </h3>
                <button onClick={restar}> - </button>
            </div>
            <button className='btn-addToCart' onClick={() => onAdd(count)}>Agregar <img src={logo} alt="logo"/></button>
        </div>
    )
}
export default Contador;