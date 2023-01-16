import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContextProvider'
import singleCart from "../styles/singleCart.module.css"
function SingleCartItem({imageURL, name, price, productQuantity,id, handleQuatity}) {

  const {cartItem, setCartItem}=useContext(AppContext)  
  let handleDelete=(id)=>{
    setCartItem([...cartItem.filter(item=>item.id!==id)])
    alert("product seccussfully deleted")

  }
  return (
    <div className={singleCart.cartbox}>
        <img src={imageURL} id={singleCart.image}></img>
        <div>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </div>
        <div>
            <button className={singleCart.btn} disabled={productQuantity==1} onClick={()=>{handleQuatity(id, -1)}}>-</button>
            <span>{productQuantity}</span>
            <button className={singleCart.btn} onClick={()=>{handleQuatity(id, 1)}}>+</button>
        </div>
        <div>
            <button className={singleCart.btn} onClick={()=>{handleDelete(id)}}>Delete</button>
        </div>
    </div>
  )
}

export default SingleCartItem