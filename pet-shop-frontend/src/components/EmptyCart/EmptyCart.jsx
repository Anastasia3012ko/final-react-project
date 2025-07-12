import React from 'react'
import MyButton from '../../ui/MyButton/MyButton'
import { Link } from 'react-router-dom'
import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <p>Looks like you have no items in your basket currently.</p>
      <Link to="/products">
        <MyButton>Continue Shopping</MyButton>
      </Link>
    </div>
  )
}

export default EmptyCart
