import DiscountedProductsSection from '../../components/DiscountedProductsSection/DiscountedProductsSection'
import styles from '../DiscountedProducts/DiscountedProducts.module.css'

const DiscountedProducts = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Discounted items</h3>
      <DiscountedProductsSection/>
      <div className={styles.filter}></div>
    </div>
  )
}

export default DiscountedProducts
