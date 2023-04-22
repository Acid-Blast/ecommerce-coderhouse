export const createProductFromFirebase = (doc) => {
    const data = doc.data()
    const productAdapted = {
        id: doc.id,
        name: data.name,
        category: data.category,
        description: data.description,
        price: data.price,
        stock: data.stock,
        img:data.img 
    }
    return productAdapted;
}