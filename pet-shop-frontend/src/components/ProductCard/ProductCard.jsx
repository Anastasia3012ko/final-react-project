import React from 'react'
import styles from './ProductCard.module.css'
import { calculateDiscount } from '../../utils/calculateDiscount'

const ProductCard = ({ image, title, price, sale }) => {
  const discount = calculateDiscount(price, sale)

  return (
    <li className={styles.item}>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={image} alt="product image" />
        {sale ? <p className={styles.discount}>-{discount}%</p> : null}
      </div>

      <p className={styles.par}>{title}</p>

      <div className={styles.cost}>
        {sale ? (
          <>
            <h5 className={styles.price}>${sale}</h5>
            <p className={styles.sale}>${price}</p>
          </>
        ) : (
          <h5 className={styles.price}>${price}</h5>
        )}
      </div>
    </li>
  )
}

export default ProductCard
