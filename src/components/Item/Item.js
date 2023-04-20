import { Link } from 'react-router-dom';

import './Item.css';


const Item = ({name, img, id, price}) => {
    return (
        <Link className="item" to={`/item/${id}`}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <h3>${price} x unidad</h3>
        </Link>
    )
}
export default Item;