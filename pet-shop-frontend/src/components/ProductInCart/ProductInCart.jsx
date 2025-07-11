import React from 'react'
import styles from './ProductInCart.module.css'
import { useDispatch } from 'react-redux'

import Counter from '../Counter/Counter'
import Price from '../Price/Price'
import { removeFromCart, updateQuantity } from '../../redux/slices/CartSlice'

const ProductInCart = ({ id, image, title, price, sale, quantity }) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.wrapper}>
      <img className={styles.img} src={image} alt="product image" />
      <div className={styles.product}>
        <div className={styles.title}>
          <p className={styles.text}>{title}</p>
          <button
            className={styles.button}
            onClick={() => dispatch(removeFromCart({ id }))}
          >
            x
          </button>
        </div>

        <div className={styles.price}>
          <Counter
            count={quantity}
            increment={() =>
              dispatch(updateQuantity({ id, quantity: quantity + 1 }))
            }
            decrement={() =>
              dispatch(updateQuantity({ id, quantity: quantity - 1 }))
            }
          />
          <Price price={price} sale={sale} />
        </div>
      </div>
    </li>
  )
}

export default ProductInCart
