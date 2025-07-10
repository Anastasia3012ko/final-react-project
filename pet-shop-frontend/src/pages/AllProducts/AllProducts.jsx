import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import styles from './AllProducts.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter'

const AllProducts = () => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <div className={styles.wrapper}>
      <h3>All products</h3>

      <ProductsFilter
        products={products}
        onFilter={setFilteredProducts}
        showDiscount={true}
      />

      <ul className={styles.list}>
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
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
    </div>
  )
}

export default AllProducts
