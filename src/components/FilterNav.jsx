import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import filterStyles from "../styles/filterNav.module.css";

//filtering navigation components for filtering purpose



function FilterNav() {
  // const [searchFilterParams,setSearchFilterParams]=useSearchParams()
  // const initFilterArray=searchFilterParams.get("filter") || []
  
  const [catefilter, setCateFilter]=useState([])
    
  const {filterData, setProductData, parmaData} = useContext(AppContext);

  // console.log(filter)


  //making array of colors available in the data
  let colorArr = [];
  for (let i = 0; i < parmaData.length; i++) {
    if (!colorArr.includes(parmaData[i].color)) {
      colorArr.push(parmaData[i].color);
    }
  }
  //making array of types avilable in the data
  let typeArr = [];
  for (let i = 0; i < parmaData.length; i++) {
    if (!typeArr.includes(parmaData[i].type)) {
      typeArr.push(parmaData[i].type);
    }
  }
  // useEffect(()=>{
  //   setSearchFilterParams({
  //     filter
  //   })
  // },[filter])
  useEffect(()=>{
    getFilteredData(filterData, catefilter)
  },[catefilter])
  let handleCategotyFilter=(e)=>{
    let {value, checked}=e.target
    if(checked){
      setCateFilter([...catefilter, value])
    }else{
      setCateFilter(catefilter.filter(item=>item!==value))
    }
    
  }

console.log(catefilter)
  // making filter function

  function getFilteredData(data, filterValue){
    if (filterValue.length!==0){
    let res=data.filter(item=>{
      if (filterValue.includes(item.color))
      return true
      else if (filterValue.includes(item.gender))
      return true
      else if (filterValue.includes(item.type))
      return true
      else if(filterValue.includes("0-250")){
        return item.price<=250
      }
      else if(filterValue.includes("251-449")){
        return item.price>250 && item.price<=449
      }
      else if(filterValue.includes("450")){
        return item.price>449
      }
    })
    setProductData(res)
  }else{
    setProductData(data)
  }
  }

  return (
    <div id={filterStyles.filterBox}>
      {/*filtering by color  */}
      <div>
        <h3>Color</h3>
        <hr />
        {colorArr.map((item) => (
          <div key={item}>
            <input type="checkbox" name={item} value={item} onChange={handleCategotyFilter}></input>
            <label htmlFor={item}>{item}</label>
            <br />
          </div>
        ))}
      </div>
      {/*filtering by Gender  */}

      <div>
        <h3>Gender</h3>
        <hr />
        <input type="checkbox" name="Men" value={"Men"} onChange={handleCategotyFilter}></input>
        <label htmlFor="Men">Men</label>
        <br />
        <input type="checkbox" name="Women" value={"Women"} onChange={handleCategotyFilter}></input>
        <label htmlFor="Women">Women</label>
        <br />
      </div>
      {/*filtering by price  */}

      <div>
        <h3>Price</h3>
        <hr />
        <input type="checkbox" name="0-250" value="0-250" onChange={handleCategotyFilter}></input>
        <label htmlFor="0-250" >₹0-250</label>
        <br />
        <input type="checkbox" name="251-449" value="251-449" onChange={handleCategotyFilter}></input>
        <label htmlFor="251-449" >₹251-449</label>
        <br />
        <input type="checkbox" name="450" value="450" onChange={handleCategotyFilter}></input>
        <label htmlFor="450">₹450</label>
        <br />
      </div>
      {/*filtering by Type  */}

      <div>
        <h3>Type</h3>
        <hr />
        {typeArr.map((item) => (
          <div key={item}>
            <input type="checkbox" name={item}  value={item} onChange={handleCategotyFilter}></input>
            <label htmlFor={item}>{item}</label>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterNav;
