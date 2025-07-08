import React, { useEffect } from 'react'
import styles from './HomePage.module.css'
import MyButton from '../../ui/MyButton/MyButton'
import MyLargeButton from '../../ui/MyLargeButton/MyLargeButton'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/CategoriesSlice'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Navigation from '../../ui/Navigation/Navigation'
import Pets from '../../assets/images/discount.png'


const Homepage = () => {
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <h4>Error: {error}</h4>
  }

  const fourCategories = categories.slice(0, 4)

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h1 className={styles.header}>Amazing Discounts on Pets Products!</h1>
        <div>
          <Link to="/discount">
            <MyButton>Discounts</MyButton>
          </Link>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.header}>
          <h3>Categories</h3>
          <div className={styles.line}></div>

          <Link to="/categories">
            <Navigation>All categories</Navigation>
          </Link>
        </div>

        <div className={styles.categoriesCard}>
          <ul className={styles.list}>
            {fourCategories.length > 0 &&
              fourCategories.map((category) => (
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
     </div>
      <div className={styles.discount}>
        <h3 className={styles.headerDiscount}>5% off on the first order</h3>
        <div className={styles.container}>
          <img src={Pets} alt="pets" />
          <form className={styles.forSale}>
              <input type="text" placeholder='Name'/>
              <input type="tel" placeholder='Phone number'/>
              <input type="email" placeholder='Email'/>
              <MyLargeButton>Get a discount</MyLargeButton>
          </form>
      </div>

       </div>

     
      
    </div>
  )
}

export default Homepage
