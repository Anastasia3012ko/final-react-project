import React, { useEffect } from 'react'
import styles from './DiscountedProductsSection.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import ProductCard from '../ProductCard/ProductCard'

const DiscountedProductsSection = ( { productsFiltered, start, end }) => {
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

  const productsToShow = productsFiltered?.length > 0 ? productsFiltered : discountProducts

  return (
    <ul className={styles.list}>
      {
        productsToShow.slice(start, end).map((product) => (
          <li key={product.id} className={styles.item}>
            <ProductCard
              image={`http://localhost:3333/${product.image}`}
              title={product.title}
              price={product.price}
              sale={product.discont_price}
              product={product}
            />
          </li>
        ))}
    </ul>
  )
}

export default DiscountedProductsSection
