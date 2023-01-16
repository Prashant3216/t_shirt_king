import React, { useContext } from 'react'
import SingleCartItem from '../components/SingleCartItem'
import { AppContext } from '../context/AppContextProvider'

function Cart() {
    const {cartItem, setCartItem}=useContext(AppContext)
    let handleQuatity=(id, val)=>{
        let updatedCart=cartItem.map(item=>item.id==id?{
            ...item, productQuantity: item.productQuantity+val
        }: item)
        setCartItem(updatedCart)
    }
  return (
    <div>{
        cartItem.map(item=>
        < SingleCartItem key={item.id} {...item} handleQuatity={handleQuatity}/>)
    }
    <div style={{width:"100px", margin:"10px auto"}}><h3>Total:{cartItem.reduce((acc,item)=>acc+(item.productQuantity* +item.price),0)}</h3></div></div>
  )
}

export default Cart