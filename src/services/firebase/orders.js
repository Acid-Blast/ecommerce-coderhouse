import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { adaptOrder } from '../../adapters/adaptOrder';

export const getOrder = (orderId) => {
    const orderRef = doc(db, 'orders', orderId)
    return getDoc(orderRef)
            .then(snapshot => {
                return adaptOrder(snapshot)
            })
            .catch((error) => console.log(error))
}