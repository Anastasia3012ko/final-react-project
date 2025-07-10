import React, { useState } from 'react'
import styles from './OrderForm.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

const OrderForm = ({ length, totalPrice }) => {
  const products = useSelector(state => state.cart.items)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    products,
  })
  const [buttonText, setButtonText] = useState('Order')
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3333/order/send',
        formData
      )

      if (response.data.success) {
        alert('Congratulations!')
        setFormData({ name: '', phone: '', email: '', products: [] })
        setButtonText('The Order is Placed')
      } else {
        alert(
          'Something went wrong. Please try again!'
        )
        setFormData({ name: '', phone: '', email: '' })
        setButtonText('Get a discount')
      }
    } catch (error) {
      console.error('Error sending discount request:', error)
      alert('Oops! We are having trouble connecting. Please try again later!')
      setButtonText('Get a discount')
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
