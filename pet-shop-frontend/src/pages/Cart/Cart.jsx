import React, { useState } from 'react'
import styles from './Cart.module.css'
import HeaderLink from '../../components/HeaderLink/HeaderLink'
import ProductInCart from '../../components/ProductInCart/ProductInCart'

import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { useSelector } from 'react-redux'
import OrderForm from '../../components/orderForm/orderForm'
import ModalWindow from '../../components/ModalWindow/ModalWindow'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  if (items.length === 0 && !isModalOpen && !isOrderComplete) {
    return <EmptyCart />
  }
  return (
    <div className={styles.wrapper}>
      <HeaderLink title="Shopping cart" path="/" toPage="Back to the store" />
      <div className={styles.cart}>
        <ul className={styles.list}>
          {items.map((item) => (
            <ProductInCart
              key={item.id}
              id={item.id}
              image={`http://localhost:3333/${item.image}`}
              title={item.title}
              price={item.price}
              sale={item.discont_price}
              item={item}
              quantity={item.quantity}
            />
          ))}
        </ul>
        <OrderForm
          totalPrice={totalPrice}
          length={items.length}
          setIsModalOpen={setIsModalOpen}
          setModalMessage={setModalMessage}
          setIsError={setIsError}
          setIsOrderComplete={setIsOrderComplete}
        />
     
      </div>
         <ModalWindow
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setIsOrderComplete(false)
          }}
          message={modalMessage}
          isError={isError}
        />
    </div>
  )
}

export default Cart
