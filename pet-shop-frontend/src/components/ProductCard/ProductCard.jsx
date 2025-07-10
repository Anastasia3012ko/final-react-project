import React from 'react'
import styles from './ProductCard.module.css'
import { calculateDiscount } from '../../utils/calculateDiscount'
import MyButton from '../../ui/MyButton/MyButton'
import Price from '../Price/Price'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/CartSlice'
import { useNavigate } from 'react-router-dom'



const ProductCard = ({ image, title, price, sale, product }) => {
  const discount = calculateDiscount(price, sale)
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleAddToCart = (e) => {
   e.stopPropagation()
  
   dispatch(addToCart({...product}))

  }
  const handleCardClick = () => {
    navigate(`/products/${product.id}`)
  }
  



  return (
    <div className={styles.item} onClick={handleCardClick}>
      <img className={styles.image} src={image} alt="product image" />
      {sale ? <div className={styles.discount}>-{discount}%</div> : null}
      <div className={styles.addToCart}>
        <MyButton onClick={handleAddToCart}>Add to cart</MyButton>
      </div>
      <div className={styles.info}>
        <p className={styles.par}>{title}</p>
        <Price price={price} sale={sale} />
      </div>
    </div>
  )
}

export default ProductCard
