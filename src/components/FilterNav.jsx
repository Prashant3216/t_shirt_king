import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import filterStyles from "../styles/filterNav.module.css";

//filtering navigation components for filtering purpose

const init={
    gender:[],
    price:[],
    color:[],
    type:[]
}

function FilterNav() {
  const [filterObj, setFilterObj]=useState(init)  
  const { productData, setProductData} = useContext(AppContext);


  //making array of colors available in the data
  let colorArr = [];
  for (let i = 0; i < productData.length; i++) {
    if (!colorArr.includes(productData[i].color)) {
      colorArr.push(productData[i].color);
    }
  }
  //making array of types avilable in the data
  let typeArr = [];
  for (let i = 0; i < productData.length; i++) {
    if (!typeArr.includes(productData[i].type)) {
      typeArr.push(productData[i].type);
    }
  }
  

  let handleGenderFilter=(e)=>{
   
  }
  let handlePriceFilter=(e)=>{
   
  }
  let handleTypeFilter=(e)=>{
   
  }
  let handleColorFilter=(e)=>{
    let {name, checked}=e.target
    if(checked){
       let colorFilter=productData.filter(item=>item.color==name)
    }else{
      
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
            <input type="checkbox" name={item} onChange={handleColorFilter}></input>
            <label htmlFor={item}>{item}</label>
            <br />
          </div>
        ))}
      </div>
      {/*filtering by Gender  */}

      <div>
        <h3>Gendor</h3>
        <hr />
        <input type="checkbox" name="Men"></input>
        <label htmlFor="Men">Men</label>
        <br />
        <input type="checkbox" name="Women"></input>
        <label htmlFor="Women">Women</label>
        <br />
      </div>
      {/*filtering by price  */}

      <div>
        <h3>Price</h3>
        <hr />
        <input type="checkbox" name="0-250"></input>
        <label htmlFor="0-250">₹0-250</label>
        <br />
        <input type="checkbox" name="251-500"></input>
        <label htmlFor="251-500">₹251-500</label>
        <br />
        <input type="checkbox" name="501-1000"></input>
        <label htmlFor="501-1000">₹501-1000</label>
        <br />
      </div>
      {/*filtering by Type  */}

      <div>
        <h3>Type</h3>
        <hr />
        {typeArr.map((item) => (
          <div key={item}>
            <input type="checkbox" name={item}></input>
            <label htmlFor={item}>{item}</label>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterNav;
