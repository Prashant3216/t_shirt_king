import React, { useState } from 'react'
import singleCart from "../styles/singleCart.module.css"
function SingleCartItem({imageURL, name, price, productQuantity,id, handleQuatity}) {
    

    

  return (
    <div className={singleCart.cartbox}>
        <img src={imageURL} id={singleCart.image}></img>
        <div>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </div>
        <div>
            <button onClick={()=>{handleQuatity(id, -1)}}>-</button>
            <span>{productQuantity}</span>
            <button onClick={()=>{handleQuatity(id, 1)}}>+</button>
        </div>
        <div>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default SingleCartItem