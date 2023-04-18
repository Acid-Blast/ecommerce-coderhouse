import { Link } from 'react-router-dom';

import './Item.css';


const Item = ({name, img, description, id}) => {
    return (
        <div className="item" tabIndex={0}> 
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            
            <div className='btn-container'>
                <Link to={`/item/${id}`} className='btn'>Ver detalle </Link>
            </div>
        </div>
    )
}
export default Item;