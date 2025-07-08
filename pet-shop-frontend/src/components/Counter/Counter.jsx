import React from 'react'
import styles from './Counter.module.css'
import Minus from '../../assets/icons/Minus.svg'
import Plus from '../../assets/icons/Plus.svg'

const Counter = () => {

  return (
    <div className={styles.counter}>
        <button className={styles.minus}><img src={Minus} alt="minus" /></button>
        <p className={styles.number}>1</p>
        <button className={styles.plus}><img src={Plus} alt="plus" /></button>

    </div>
  )
}

export default Counter