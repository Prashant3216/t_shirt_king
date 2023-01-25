import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContextProvider";
import { getDataApi } from "../utils/getAPI";
import ShowItem from "../components/ShowItem";
import pro from "../styles/products.module.css";
import FilterNav from "../components/FilterNav";
import { useSearchParams } from "react-router-dom";

function Products() {
  const { productData, setProductData, setFilterData, setParmaData } = useContext(AppContext);
  

  //getting data
  let getData = async () => {
    let res = await getDataApi();
    setProductData(res);
    setFilterData(res);
    setParmaData(res);
  };

  //making an api call for getting the data
  useEffect(() => {
    getData();
  }, []);

 

  return (
    <>
      <div id={pro.product_container}>
        <FilterNav />
        <div id={pro.product_listing}>
          {productData.length > 0 ? (
            productData.map((item) => <ShowItem key={item.id} {...item} />)
          ) : (
            <p>No result found...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
