import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryById } from '../../redux/slices/categoriesSlice'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from '../AllProducts/AllProducts.module.css'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter'

const CategoryProducts = () => {
  const { categoryId } = useParams()
  const dispatch = useDispatch()

  const { currentCategory, loading, error } = useSelector(
    (state) => state.categories
  )

  const products = currentCategory?.data || []
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    dispatch(fetchCategoryById(categoryId))
  }, [dispatch, categoryId])

  useEffect(() => {
    
    if (products.length > 0) {
      setFilteredProducts(products)
    }
  }, [products])

  if (loading || !currentCategory) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const productsToShow = filteredProducts?.length > 0 ? filteredProducts : products
    

  return (
    <div className={styles.wrapper}>
      <ProductsFilter
        products={currentCategory.data}
        onFilter={setFilteredProducts}
        showDiscount={true}
      />
      <h3>{currentCategory.category.title}</h3>

      <ul className={styles.list}>
        {productsToShow.map((product) => (
          <li key={product.id}>
            <ProductCard
              image={`http://localhost:3333/${product.image}`}
              title={product.title}
              price={product.price}
              sale={product.discont_price}
              product={product}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryProducts
