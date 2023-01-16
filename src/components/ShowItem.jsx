
import React, { useContext, } from "react";
import { AppContext } from "../context/AppContextProvider";
import itemStyle from "../styles/showItem.module.css";

// single card component

function ShowItem({ imageURL, name, price, quantity, id, type, color, gender }) {
  const { cartItem, setCartItem } = useContext(AppContext);
  //handleing add to cart
  let handleAddToCart = (_id) => {
    if (cartItem.length==0){
        setCartItem([...cartItem, { imageURL, name, price, productQuantity:1, id, quantity}])
        alert("Added to cart")
    }
    else {
       let productcheck=cartItem.filter(item=> item.id==_id)
       if (productcheck.length==0){
        setCartItem([...cartItem, { imageURL, name, price, productQuantity:1, id, quantity }])
        alert("Added to cart")
       }
       else{
        alert("Already added to cart")
       }
    }
   
  };

  return (
    <div className={itemStyle.card}>
      <div>
        <img src={imageURL}></img>
      </div>
      <div>
        <h3>{name}</h3>
        <div>
          <div>
          <h2>₹{price}</h2>
            <p>Type: {type}</p>
            <p>Color: {color}</p>
            <p>Gender: {gender}</p>
          </div>
          <button className={itemStyle.btn} onClick={()=>handleAddToCart(id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
