import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import styles from './AllProducts.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const AllProducts = () => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <h3>All products</h3>

      <div className={styles.filter}></div>

      <ul className={styles.list}>
        {products.length > 1 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={`http://localhost:3333/${product.image}`}
              title={product.title}
              price={product.price}
              sale={product.discont_price}
            />
          ))}
      </ul>
    </div>
  )
}

export default AllProducts
