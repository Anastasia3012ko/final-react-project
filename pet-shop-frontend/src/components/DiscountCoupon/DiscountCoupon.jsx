import React, { useState } from 'react'
import styles from './DiscountCoupon.module.css'
import Pets from '../../assets/images/discount.png'
import MyLargeButton from '../../ui/MyLargeButton/MyLargeButton'
import axios from 'axios'
import ModalWindow from '../ModalWindow/ModalWindow'

const DiscountCoupon = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })

  const [buttonText, setButtonText] = useState('Get a discount')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalMessage, setModalMessage] = useState('')

  const [isError, setIsError] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3333/sale/send',
        formData
      )

      if (response.data) {
        setModalMessage('Thank you! Check your email for your discount!')
        setIsError(false)
        setFormData({ name: '', phone: '', email: '' })
        setButtonText('Request Submitted')
  
      } else {
        setModalMessage(
          'Something went wrong while applying the discount. Please try again!'
        )
        setIsError(true)
        setFormData({ name: '', phone: '', email: '' })
        setButtonText('Get a discount')
      }
    } catch (error) {
      console.error('Error sending discount request:', error)
      setModalMessage(
        'Oops! We are having trouble connecting. Please try again later!'
      )
      setIsError(true)
      setButtonText('Get a discount')
    }

    setIsModalOpen(true)
  }

  return (
    <div className={styles.discount}>
      <h3 className={styles.headerDiscount}>5% off on the first order</h3>
      <div className={styles.container}>
        <img className={styles.petsImage} src={Pets} alt="pets" />
        <form onSubmit={handleSubmit} className={styles.forSale}>
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
          <MyLargeButton type="submit">
            {buttonText}
          </MyLargeButton>
        </form>

        <ModalWindow
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message={modalMessage}
          isError={isError}
        />
      </div>
    </div>
  )
}

export default DiscountCoupon
