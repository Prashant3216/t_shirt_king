import React, { useContext } from "react";
import SingleCartItem from "../components/SingleCartItem";
import { AppContext } from "../context/AppContextProvider";
import cartStyle from "../styles/cart.module.css";

function Cart() {
  const { cartItem, setCartItem } = useContext(AppContext);
  let handleQuatity = (id, val) => {
    let updatedCart = cartItem.map((item) =>
      item.id == id
        ? {
            ...item,
            productQuantity: item.productQuantity + val,
          }
        : item
    );
    setCartItem(updatedCart);
  };
  return (
    <div className={cartStyle.cart_container}>
      {cartItem.map((item) => (
        <SingleCartItem key={item.id} {...item} handleQuatity={handleQuatity} />
      ))}
      <div className={cartStyle.totalSum}>
      <h3>Sub Total :</h3>
        <h3>
          {cartItem.reduce(
            (acc, item) => acc + item.productQuantity * +item.price,
            0
          )}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
