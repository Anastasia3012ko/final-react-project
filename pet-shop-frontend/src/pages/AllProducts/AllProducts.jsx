import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import styles from './AllProducts.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Categories from '../Categories/Categories'
import { Link } from 'react-router-dom'

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
        {products.length > 0 &&
          products.map((product) => (
            <li key={product.id}  className={styles.item}>
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
    </div>
  )
}

export default AllProducts
