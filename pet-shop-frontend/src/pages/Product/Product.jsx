import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './Product.module.css'

import { fetchProductById } from '../../redux/slices/productsSlice'
import { calculateDiscount } from '../../utils/calculateDiscount'
import MyButton from '../../ui/MyButton/MyButton'
import Counter from '../../components/Counter/Counter'
import { addToCart } from '../../redux/slices/CartSlice'

const Product = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { productById } = useSelector((state) => state.products)
  
  const [quantity, setQuantity] = useState(1)

  console.log(productById)

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  if (!productById || !productById.id) {
    return <div>Loading product...</div>
  }

  const discount = calculateDiscount(
    productById.price,
    productById.discont_price
  )

 const handleAddToCart = () => {
  dispatch(addToCart({...productById, quantity}))
  setQuantity(1)
 }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={productById.image ? `http://localhost:3333/${productById.image}` : '/default.png'}
          alt="product"
        />
      </div>

      <div className={styles.productInfo}>
        <h4>{productById.title}</h4>
        <div className={styles.cost}>
          {productById.discont_price ? (
            <>
              <h3 className={styles.price}>${productById.discont_price}</h3>
              <p className={styles.sale}>${productById.price}</p>
              <div className={styles.discount}>-{discount}%</div>
            </>
          ) : (
            <h3 className={styles.price}>${productById.price}</h3>
          )}
        </div>

        <div className={styles.addToCart}>
          <Counter
            count={quantity}
            increment={() => setQuantity(quantity => quantity + 1) }
            decrement={() => setQuantity(quantity => Math.max(1, quantity - 1))}
            
          />
          <MyButton onClick={handleAddToCart}>Add to car</MyButton>
        </div>

        <div className={styles.description}>
          <h4 className={styles.headerDescription}>Description</h4>
          <p className={styles.text}>{productById.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
