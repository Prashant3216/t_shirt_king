import React from 'react'
import itemStyle from "../styles/showItem.module.css"

// single card component

function ShowItem({imageURL, name, price}) {
  return (
    <div className={itemStyle.card}>
        <div>
            <img src={imageURL}></img>
        </div>
        <div>
            <h3>{name}</h3>
            <div>
            <h2>₹{price}</h2>
            <button className={itemStyle.btn}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ShowItem