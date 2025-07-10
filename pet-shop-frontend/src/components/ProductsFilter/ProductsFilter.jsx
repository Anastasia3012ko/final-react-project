import React, { useEffect, useState } from 'react'
import styles from './ProductsFilter.module.css'

const ProductsFilter = ({ products, onFilter }) => {
  const [discount, setDiscount] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sortOrder, setSortOrder] = useState('default')

  useEffect(() => {
    let filtered = [...products]
    const actualPrice = (p) => p.discont_price ?? p.price

    if (minPrice !== '') {
      filtered = filtered.filter((p) => actualPrice(p) >= parseFloat(minPrice))
    }
    if (maxPrice !== '') {
      filtered = filtered.filter((p) => actualPrice(p) <= parseFloat(maxPrice))
    }

    if (discount) {
      filtered = filtered.filter((p) => p.discont_price !== null)
    }

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    onFilter(filtered)
  }, [products, minPrice, maxPrice, sortOrder, discount, onFilter])

  return (
    <div className={styles.filter}>
      <div className={styles.filterPrice}>
        <p className={styles.par}>Price</p>
        <input
          className={styles.input}
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="from"
        />
        <input
          className={styles.input}
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="to"
        />
      </div>

      <div className={styles.filterPrice}>
        <p className={styles.par}>Discounted items</p>
        <input
          type="checkbox"
          value={discount}
          onChange={(e) => setDiscount(e.target.checked)}
        />
      </div>

      <div className={styles.filterPrice}>
        <p className={styles.par}>Sorted</p>
        <select
          className={styles.select}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">by default</option>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </div>
    </div>
  )
}

export default ProductsFilter

