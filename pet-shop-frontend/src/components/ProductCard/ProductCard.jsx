import React from 'react'
import styles from './ProductCard.module.css'
import { calculateDiscount } from '../../utils/calculateDiscount'
import MyButton from '../../ui/MyButton/MyButton'
import Price from '../Price/Price'



const ProductCard = ({ image, title, price, sale }) => {
  const discount = calculateDiscount(price, sale)
  



  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="product image" />
      {sale ? <div className={styles.discount}>-{discount}%</div> : null}
      <div className={styles.addToCart}>
        <MyButton>Add to cart</MyButton>
      </div>
      <div className={styles.info}>
        <p className={styles.par}>{title}</p>
        <Price price={price} sale={sale} />
      </div>
    </div>
  )
}

export default ProductCard
