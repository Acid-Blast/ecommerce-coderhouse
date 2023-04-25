export const adaptOrder = (doc) => {
    const data = doc.data();
    const adaptedOrder = {
        id: doc.id,
        name: data.buyer.name,
        lastname: data.buyer.lastname,
        phone: data.buyer.phone,
        email: data.buyer.email,
        address: data.buyer.address,
        comments: data.buyer.comments,
        date: data.buyer.date,
        items: data.items,
        total: data.total
    }
    return adaptedOrder
}