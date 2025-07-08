import React from 'react'
import styles from './CategoryCard.module.css'

const CategoryCard = ({ image, title }) => {
  return (
    <div className={styles.item} >
      <img className={styles.image} src={image} alt="category image" />
      <p className={styles.par}>{title}</p>
    </div>
  )
}

export default CategoryCard
