import './ItemDetail.css'

const ItemDetail = ({name, price, category, img, stock, description}) => {
    return(
        <div className='itemDetail'>
            <div className='img-container'>
                <img src={img} alt={name}/>
            </div>
            <div className='info-container'>
                <h2>{name}</h2>
                <p>{description}</p>
                
                <div className='info-detail'>
                    <h3>Categoria: "{category}"</h3>
                    <h3>Stock: {stock}</h3>
                    <h3 className='price'>Precio: ${price}</h3>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;