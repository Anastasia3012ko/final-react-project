import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../ui/Navigation/Navigation'
import styles from './HeaderLink.module.css'

const HeaderLink = ({ title, path, toPage }) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <div className={styles.line}></div>

      <Link to={path}>
        <Navigation>{toPage}</Navigation>
      </Link>
    </div>
  )
}

export default HeaderLink
