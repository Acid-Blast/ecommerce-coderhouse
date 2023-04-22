export const adaptCategories = (docs) => {
    const data = docs.data()
    const categoriesAdapted = {
        id: docs.id,
        slug: data.slug,
        label: data.label
    }
    return categoriesAdapted;
}