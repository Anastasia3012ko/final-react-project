import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryById } from '../../redux/slices/CategoriesSlice'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from '../AllProducts/AllProducts.module.css'

const CategoryProducts = () => {
  const { categoryId } = useParams()
  const dispatch = useDispatch()

  const { currentCategory, loading, error } = useSelector(
    (state) => state.categories
  )
  console.log(currentCategory)

  useEffect(() => {
    dispatch(fetchCategoryById(categoryId))
  }, [dispatch, categoryId])

  

  if (loading || !currentCategory) {
    return <p>Loading category...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}></div>

      <h3>{currentCategory.category.title}</h3>
      <ul className={styles.list}>
        {currentCategory.data.map((product) => (
          <ProductCard
            key={product.id}
            image={`http://localhost:3333/${product.image}`}
            title={product.title}
            price={product.price}
            sale={product.discont_price}
          />
        ))}
      </ul>
    </div>
  )
}

export default CategoryProducts
