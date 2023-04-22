import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export const getCategories = () => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))
    return getDocs(categoriesRef)
        .then(snapshot => {
            return snapshot
        })
        .catch((error) => {
            return error
        })
}
