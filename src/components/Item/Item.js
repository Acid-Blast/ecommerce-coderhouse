import './Item.css';
const Item = ({name, img, price}) => {
    return (
        <div className="item" tabIndex={0}> 
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default Item;