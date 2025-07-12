import React, { useEffect, useState } from 'react'
import styles from './ProductsFilter.module.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import Checkbox from '@mui/material/Checkbox'

const ProductsFilter = ({ products, onFilter, showDiscount }) => {
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
      filtered.sort((a, b) => actualPrice(a) - actualPrice(b))
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => actualPrice(b) - actualPrice(a))
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

      {showDiscount && (
        <div className={styles.filterPrice}>
          <p className={styles.par}>Discounted items</p>
          <Checkbox
            size="medium"
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)}
           color='primary'
          />
        </div>
      )}

      <div className={styles.filterPrice}>
        <p className={styles.par}>Sorted</p>
        <FormControl fullWidth size="small" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="sort-order-label">By Price</InputLabel>
          <Select sx={{
            fontSize: {
              xs: 12,
              sm: 20
            }
          }}
          
            labelId="sort-order-label"
            value={sortOrder}
            label="Sort By"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="default">by default</MenuItem>
            <MenuItem value="asc">
              Price <NorthOutlinedIcon fontSize="small" />
            </MenuItem>
            <MenuItem value="desc">
              Price <SouthOutlinedIcon fontSize="small" />
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default ProductsFilter
