import React from 'react'
import styles from  './ModalWindow.module.css'

const ModalWindow = ({ isOpen, isError, onClose, message }) => {
    if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
        <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
        <div className={styles.messageContainer}>
          <h4 className={isError ? styles.errorTitle : styles.successTitle}>
            {isError ? 'Error' : 'Congratulations! '}
          </h4>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
 
    </div>
   )   
}

export default ModalWindow