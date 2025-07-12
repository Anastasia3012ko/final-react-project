import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const items = useSelector(state => state.cart.items)
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <img className={styles.logo} src={Logo} alt="logo" />
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
        <div className={styles.cart}>
          <div className={(items.length !== 0) ? styles.countProducts : styles.block}>{items.length}</div>
          <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <ShoppingCartIcon sx={{ fontSize: {
            xs: 40,
            sm: 60
          } }}/>
        </NavLink>
        </div>
        
      </nav>
    </div>
  )
}

export default Header
