import React from 'react'
import styles from './Navigation.module.css'

const Navigation = ({children}) => {
  return (
    <div className={styles.nav}>{children}</div>
  )
}

export default Navigation