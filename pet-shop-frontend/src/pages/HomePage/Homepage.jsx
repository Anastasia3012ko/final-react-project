import styles from './HomePage.module.css'

import DiscountCoupon from '../../components/DiscountCoupon/DiscountCoupon'
import Banner from '../../components/Banner/Banner'
import HeaderLink from '../../components/HeaderLink/HeaderLink'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import DiscountedProductsSection from '../../components/DiscountedProductsSection/DiscountedProductsSection'

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.categories}>
        <HeaderLink
          title="Categories"
          path="/categories"
          toPage="All categories"
        />
        <CategoriesSection start={0} end={4} />
      </div>
      <DiscountCoupon />
      <HeaderLink title="Sale" path="/discount" toPage="All sales" />
      <DiscountedProductsSection start={4} end={8} />
    </div>
  )
}

export default Homepage
