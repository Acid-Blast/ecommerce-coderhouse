import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { sweetAlert } from '../../services/sweetAlert/sweetAlert';


import './ItemDetailContainer.css';


 
const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect( () => {  
        setLoading(true)

        const productref = doc(db, 'Productos', itemId);

        getDoc(productref)
            .then(snapshot => {
                const data = snapshot.data();
                const productAdapted = {id: snapshot.id, ...data};
                setProducts(productAdapted);

            })
            .catch(error => {
                sweetAlert('Error', error, 'error')
            })
            .finally(() => setLoading(false))

    }, [itemId])

    if(loading) return <Loader/>;

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer;