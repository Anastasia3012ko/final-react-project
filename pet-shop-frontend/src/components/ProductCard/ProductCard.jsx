import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({ image, title, price, sale }) => {
  return (
    <li className={styles.item}>
        <img className={styles.image} src={image} alt="product image" />
        <p className={styles.par}>{title}</p>
        <h5 className={styles.price}>{price}</h5>
        <h6 className={styles.sale}>{sale}</h6>
    </li>
  )
}

export default ProductCard