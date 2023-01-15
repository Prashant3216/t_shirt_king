//api function for getting the data
import axios from "axios"
export let getDataApi= async ()=>{
    let res=await axios("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    return res.data
  }