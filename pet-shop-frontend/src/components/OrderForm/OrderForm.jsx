import React, { useState } from 'react'
import styles from './OrderForm.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/slices/CartSlice'
import MyButton from '../../ui/MyButton/MyButton'

const OrderForm = ({ length, totalPrice }) => {
  const products = useSelector((state) => state.cart.items)
  const productsByOrder = products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }))

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const [buttonText, setButtonText] = useState('Order')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
      ...formData,
      products: productsByOrder,
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
        alert('Something went wrong. Please try again!')
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
        <h4 className={styles.header}>Order details</h4>
        <h4 className={styles.orderText}>{length} items</h4>
        <div className={styles.totalPrice}>
          <h4 className={styles.orderText}>Total</h4>
          <h3>$ {totalPrice}</h3>
        </div>
      </div>
      <div className={styles.inputField}>
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
      </div>

      <MyButton type="submit">{buttonText}</MyButton>
    </form>
  )
}

export default OrderForm
