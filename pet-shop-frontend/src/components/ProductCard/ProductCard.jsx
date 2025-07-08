import React from 'react'
import styles from './ProductCard.module.css'
import { calculateDiscount } from '../../utils/calculateDiscount'
import MyButton from '../../ui/MyButton/MyButton'

const ProductCard = ({ image, title, price, sale }) => {
  const discount = calculateDiscount(price, sale)

  return (
      <div className={styles.item}>
        <img className={styles.image} src={image} alt="product image" />
        {sale ? <div className={styles.discount}>-{discount}%</div> : null}
        <div className={styles.addToCart}>
          <MyButton>Add to cart</MyButton>
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
      </div>
  )
}

export default ProductCard
