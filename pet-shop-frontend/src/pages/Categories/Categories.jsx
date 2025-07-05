import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/CategoriesSlice'
import styles from './Categories.module.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()

  console.log(categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <h3>Categories</h3>
      <ul className={styles.list}>
        {categories.length > 1 &&
          categories.map((category) => (
            <CategoryCard key={category.id}
              title={category.title}
              image={`http://localhost:3333/${category.image}`}
            />
          ))}
      </ul>
    </div>
  )
}

export default Categories
