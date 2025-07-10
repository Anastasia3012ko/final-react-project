import React from 'react'
import styles from './Counter.module.css'
import Minus from '../../assets/icons/Minus.svg'
import Plus from '../../assets/icons/Plus.svg'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.minus} onClick={decrement}>
        <img src={Minus} alt="minus" />
      </button>
      <p className={styles.number}>{count}</p>
      <button className={styles.plus} onClick={increment}>
        <img src={Plus} alt="plus" />
      </button>
    </div>
  )
}

export default Counter
