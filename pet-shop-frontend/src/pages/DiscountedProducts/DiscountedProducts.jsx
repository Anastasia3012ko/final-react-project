import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { useEffect } from 'react'
import styles from '../AllProducts/AllProducts.module.css'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'

const DiscountedProducts = () => {
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
  console.log(discountProducts)
  return (
    <div className={styles.wrapper}>
      <h3>Discounted items</h3>

       <div className={styles.filter}></div>

      <ul className={styles.list}>
        {discountProducts.length > 0 &&
          discountProducts.map((product) => (
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

export default DiscountedProducts
