import { useDispatch, useSelector } from 'react-redux'
import DiscountedProductsSection from '../../components/DiscountedProductsSection/DiscountedProductsSection'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter'
import styles from '../DiscountedProducts/DiscountedProducts.module.css'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../../redux/slices/productsSlice'

const DiscountedProducts = () => {
  const { products,  error } = useSelector(
    (state) => state.products
  )
  const dispatch = useDispatch()
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
  if (products.length === 0) {
    dispatch(fetchProducts())
  }
}, [dispatch, products.length])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  if (!products) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.wrapper}>
      <ProductsFilter
        products={products}
        onFilter={setFilteredProducts}
        showDiscount={false}
      />
      <h3>Discounted items</h3>
      <DiscountedProductsSection productsFiltered={filteredProducts} />
    </div>
  )
}

export default DiscountedProducts
