import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ products, txt }) => {
    return (
        <div className='itemList'>
            <h2 className='itemList-subtitulo'>{txt}</h2>
            {products.map( product => {
                return (
                    <Item key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default ItemList;