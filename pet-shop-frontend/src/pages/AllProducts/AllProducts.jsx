import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'

const AllProducts = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()
  console.log(products)
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      
    </div>
  )
}

export default AllProducts