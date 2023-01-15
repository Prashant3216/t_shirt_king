import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContextProvider'
import axios from "axios"
import ShowItem from '../components/ShowItem'
import pro from "../styles/products.module.css"
import FilterNav from '../components/FilterNav'
import SearchBar from '../components/SearchBar'

function Products() {
  const {productData, setProductData}=useContext(AppContext)
  //api function for getting the data
  let getDataApi= async ()=>{
    let res=await axios("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    setProductData(res.data) 
  }
//making an api call for getting the data
  useEffect(() => {
    getDataApi()
  },[])
  
//   useEffect(() => {
//     console.log(productData)
//   }, [productData])
  
  return (
    <>
    <SearchBar/>
    <div id={pro.product_container}>
    <FilterNav/>
    <div id={pro.product_listing}>{
        productData.map(item=><ShowItem key={item.id} {...item}/>)
    }</div>
    </div>
    </>
  )
}

export default Products