import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/CategoriesSlice'
import styles from './Categories.module.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { Link } from 'react-router-dom'


const Categories = () => {
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  console.log(categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])



  return (
    <div className={styles.wrapper}>
      <h3>Categories</h3>
      <ul className={styles.list}>
        {categories.length > 0 &&
          categories.map((category) => (
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
    </div>
  )
}

export default Categories
