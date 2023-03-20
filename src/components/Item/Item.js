import './Item.css';
import Button from '../Button/Button'

const Item = ({name, img, description}) => {
    return (
        <div className="item" tabIndex={0}> 
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            {/* <p>Precio: ${price}</p> */}
            <p>{description}</p>
            
            <div className="btn-container">
                <Button txt="Agregar al carro"/>
            </div>
        </div>
    )
}
export default Item;