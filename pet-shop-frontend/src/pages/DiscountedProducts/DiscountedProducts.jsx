
import DiscountedProductsSection from '../../components/DiscountedProductsSection/DiscountedProductsSection'
import styles from '../DiscountedProducts/DiscountedProducts.module.css'

const DiscountedProducts = () => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}></div>
      <h3>Discounted items</h3>
      <DiscountedProductsSection/>
      
    </div>
  )
}

export default DiscountedProducts
