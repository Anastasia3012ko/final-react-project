import React, { useState } from 'react'
import styles from './OrderForm.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import MyLargeButton from '../../ui/MyLargeButton/MyLargeButton'
import { clearCart } from '../../redux/slices/CartSlice'

const OrderForm = ({ length, totalPrice }) => {
  const products = useSelector(state => state.cart.items)
    const productsByOrder = products.map(product => ({
  id: product.id,
  quantity: product.quantity
}))

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [buttonText, setButtonText] = useState('Order')
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
        ...formData,
        products: productsByOrder
    }

    try {
      const response = await axios.post(
        'http://localhost:3333/order/send',
        orderData
      )
    

      if (response.data) {
        setButtonText('The Order is Placed')
        alert('Congratulations! ')


        dispatch(clearCart())
        setFormData({ name: '', phone: '', email: '' })
        
      } else {
        alert(
          'Something went wrong. Please try again!'
        )
        setFormData({ name: '', phone: '', email: '' })
        setButtonText('Order')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Oops! We are having trouble connecting. Please try again later!')
      setButtonText('Order')
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.headerForm}>
        <h4>Order details</h4>
        <p className={styles.orderText}>{length} items</p>
        <div className={styles.totalPrice}>
          <p className={styles.orderText}>Total</p>
          <h3>$ {totalPrice}</h3>
        </div>
      </div>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        required
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <MyLargeButton type="submit">{buttonText}</MyLargeButton>
    </form>
  )
}

export default OrderForm
