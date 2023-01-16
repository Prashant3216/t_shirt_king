import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import {BsCartCheckFill} from "react-icons/bs"
import styles from "../styles/navbar.module.css"
import SearchBar from './SearchBar'
import { AppContext } from '../context/AppContextProvider'

//Navbar component
function Navbar() {
  const {cartItem}=useContext(AppContext)
  return (
    <div className={styles.fixedNav}>
        <div className={styles.nav_container}>
            <h1>t-Shirt King</h1>
            <div className={styles.shirt_cart}>
                <NavLink to="/" className={styles.link}><h4>T-Shirts</h4></NavLink>
                <NavLink to="/cart" className={styles.link}><BsCartCheckFill  size={"30px"} color="white"/>{cartItem.length!==0&&<p>{cartItem.length!==0 && cartItem.length }</p>}</NavLink>
            </div>
        </div>
        <SearchBar/>
    </div>
  )
}

export default Navbar