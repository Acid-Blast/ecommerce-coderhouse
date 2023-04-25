import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { sweetAlert } from '../../services/sweetAlert/sweetAlert';
import { getProductsById } from '../../services/firebase/products';


import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect( () => {  
        setLoading(true)

        getProductsById(itemId)
            .then(product => {
                setProduct(product)
            })
            .catch((error) => {
                sweetAlert('Error', `${error}`, 'error')
            })
            .finally(() => {
                setLoading(false)
            })


    }, [itemId])

    if(loading) return <Loader/>;

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer;