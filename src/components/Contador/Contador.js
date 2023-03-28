import { useState, useEffect } from 'react';

import './Contador.css';

const Contador = (props) => {

    const [count, setCount] = useState(1);

    const sumar = () => count < props.max && setCount(prev => prev + 1);
    
    const restar = () => count > 1 && setCount(prev => prev - 1);

    return(
        <div className='count-container'>
            <button onClick={sumar}> + </button>
            <h3> {count} </h3>
            <button onClick={restar}> - </button>
        </div>
    )
}
export default Contador;