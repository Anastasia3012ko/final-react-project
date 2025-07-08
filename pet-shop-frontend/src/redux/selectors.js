export const selectAllProducts = state => state.products.products
export const selectProductById = state => state.products.ProductById
export const selectLoadingProducts = state => state.products.loading 
export const selectErrorProducts = state => state.products.error 

export const selectCategories = state => state.categories.categories
export const selectCurrentCategory = state => state.categories.ProductById
export const selectLoadingCategories = state => state.categories.loading 
export const selectErrorCategories = state => state.categories.error 