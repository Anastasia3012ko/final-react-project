import React from 'react'
import styles from './Categories.module.css'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'


const Categories = () => {
  
  return (
    <div className={styles.wrapper}>
      <h3>Categories</h3>
      <CategoriesSection/>
    </div>
  )
}

export default Categories
