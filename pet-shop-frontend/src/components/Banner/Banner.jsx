import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../../ui/MyButton/MyButton'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.header}>Amazing Discounts on Pets Products!</h1>
      <div>
        <Link to="/discount">
          <MyButton>% Sale %</MyButton>
        </Link>
      </div>
    </div>
  )
}

export default Banner
