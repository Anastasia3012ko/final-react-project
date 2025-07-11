import React from 'react'
import styles from './Price.module.css'

const Price = ({sale, price}) => {
  return (
    <div className={styles.cost}>
              {sale ? (
                <>
                  <h4 className={styles.price}>${sale}</h4>
                  <p className={styles.sale}>${price}</p>
                </>
              ) : (
                <h5 className={styles.price}>${price}</h5>
              )}
            </div>
  )
}

export default Price