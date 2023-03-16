import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='itemList'>
            {products.map( product => {
                //siempre va KEY en el callback del .map() 
                return (
                    <Item key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default ItemList;