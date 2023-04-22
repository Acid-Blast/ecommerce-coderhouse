import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export const getCategories = () => {
    const categoriesRef = collection(db, 'categories')
    return getDocs(categoriesRef)
        .then(snapshot => {
            return snapshot
        })
        .catch((error) => {
            return error
        })
}
