import React from 'react'
import {NavLink} from "react-router-dom"
import {BsCartCheckFill} from "react-icons/bs"
import styles from "../styles/navbar.module.css"
function Navbar() {
  return (
    <div>
        <div className={styles.nav_container}>
            <h1>t-Shirt King</h1>
            <div className={styles.shirt_cart}>
                <NavLink to="/" className={styles.link}><h4>T-Shirts</h4></NavLink>
                <NavLink to="/cart"><BsCartCheckFill  size={"30px"} color="white"/></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar