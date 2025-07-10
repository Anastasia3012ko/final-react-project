import React from 'react'
import styles from './MyLargeButton.module.css'

const MyLargeButton = ({ children, onClick, type }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default MyLargeButton
