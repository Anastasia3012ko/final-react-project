import React from 'react'
import ErrorPage from '../../assets/images/404.png'
import MyButton from '../../ui/MyButton/MyButton'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.errorPage}>
      <img src={ErrorPage} alt="error 404" />
      <h3>Page Not Found</h3>
      <p className={styles.par}>
        We’re sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <Link to="/">
        <MyButton>Go Home</MyButton>
      </Link>
    </div>
  )
}

export default NotFound
