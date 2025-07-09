import React, { useEffect } from 'react'
import styles from './DiscountedProductsSection.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const DiscountedProductsSection = ({ start, end }) => {
  const { products, loading } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  const discountProducts = products.filter(
    (product) => product.discont_price !== null
  )

  return (
    <ul className={styles.list}>
      {discountProducts.length > 0 &&
        discountProducts.slice(start, end).map((product) => (
          <li key={product.id} className={styles.item}>
            <Link to={`/products/${product.id}`}>
              <ProductCard
                image={`http://localhost:3333/${product.image}`}
                title={product.title}
                price={product.price}
                sale={product.discont_price}
              />
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default DiscountedProductsSection
