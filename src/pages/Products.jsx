import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContextProvider'

import { getDataApi } from '../utils/getAPI'
import ShowItem from '../components/ShowItem'
import pro from "../styles/products.module.css"
import FilterNav from '../components/FilterNav'
import SearchBar from '../components/SearchBar'

function Products() {
  const {productData,setProductData}=useContext(AppContext)
//getting data
let getData= async ()=>{
 let res=await getDataApi()
 setProductData(res)
}


//making an api call for getting the data
  useEffect(() => {
    getData()
  },[])
  
  useEffect(() => {
    console.log(productData)
  }, [productData])
  
  return (
    <>
    <SearchBar/>
    <div id={pro.product_container}>
    <FilterNav/>
    <div id={pro.product_listing}>{
        productData.length>0?productData.map(item=><ShowItem key={item.id} {...item} />) : <p>No result found...</p>
    }</div>
    </div>
    </>
  )
}

export default Products