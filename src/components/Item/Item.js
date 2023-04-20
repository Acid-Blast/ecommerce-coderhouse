import { Link } from 'react-router-dom';

import './Item.css';


const Item = ({name, img, id, price, stock}) => {
    return (
        <Link className="item" to={`/item/${id}`}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <h3>${price}</h3>
            {
                !stock && <h3 style={{color: "red"}}>Sin stock</h3>
            }
        </Link>
    )
}
export default Item;