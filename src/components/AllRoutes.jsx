import React from 'react'
import {Routes, Route} from "react-router-dom"
import Cart from '../pages/Cart'
import Products from '../pages/Products'



//AllRoutes available here

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
  )
}

export default AllRoutes