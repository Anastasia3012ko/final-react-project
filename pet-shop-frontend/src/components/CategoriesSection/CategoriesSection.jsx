import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import styles from './CategoriesSection.module.css'
import { Link } from 'react-router-dom'
import CategoryCard from '../CategoryCard/CategoryCard'


const CategoriesSection = ({ start, end }) => {
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (loading || !categories) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <ul className={styles.list}>
      {categories.length > 0 &&
        categories.slice(start, end).map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <CategoryCard
                title={category.title}
                image={`http://localhost:3333/${category.image}`}
              />
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default CategoriesSection
