import React from 'react'
import styles from './MyButton.module.css'

const MyButton = ({ children, onClick, type}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default MyButton