import React from 'react'
import styles from './Cart.module.css'
import HeaderLink from '../../components/HeaderLink/HeaderLink'
import ProductInCart from '../../components/ProductInCart/ProductInCart'

import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { useSelector } from 'react-redux'
import OrderForm from '../../components/orderForm/orderForm'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart)

  if (items.length === 0) {
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
        <OrderForm totalPrice={totalPrice} length={items.length} />
      </div>
    </div>
  )
}

export default Cart
