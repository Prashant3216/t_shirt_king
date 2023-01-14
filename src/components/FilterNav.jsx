import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import filterStyles from "../styles/filterNav.module.css"

function FilterNav() {
  const { productData } = useContext(AppContext);
  let colorArr=[]
  for (let i=0; i<productData.length; i++){
    if (!colorArr.includes(productData[i].color)){
        colorArr.push(productData[i].color)
    }
  }
  let typeArr=[]
  for (let i=0; i<productData.length; i++){
    if (!typeArr.includes(productData[i].type)){
        typeArr.push(productData[i].type)
    }
  }
  console.log(typeArr)
  return (
    <div id={filterStyles.filterBox}>
      <div>
        <h3>Color</h3>
        <hr/>
        {colorArr.map((item) => (
          <div key={item}>
            <input type="checkbox" name={item}></input>
            <label htmlFor={item}>{item}</label>
            <br />
          </div>
        ))}
      </div>
      <div>
        <h3>Gendor</h3>
        <hr/>
        <input type="checkbox" name="Men"></input>
        <label htmlFor="Men">Men</label>
        <br />
        <input type="checkbox" name="Women"></input>
        <label htmlFor="Women">Women</label>
        <br />
      </div>
      <div>
        <h3>Price</h3>
        <hr/>
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
      <div>
        <h3>Type</h3>
        <hr/>
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
