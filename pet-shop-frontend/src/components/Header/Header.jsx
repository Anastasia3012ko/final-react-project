import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/icons/logo.svg'
import Basket from '../../assets/icons/basket.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Main Page
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            All products
          </NavLink>
          <NavLink
            to="/discount"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            All sales
          </NavLink>
        </div>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <img src={Basket} alt="cart" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
