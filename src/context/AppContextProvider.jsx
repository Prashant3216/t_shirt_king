import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const AppContext = createContext();

//making use of createContext and useContext for avoiding prop-drilling
export function AppContextProvider({ children }) {
  // const [searchParams, setSearchParams]=useSearchParams()
  // const initProduct=searchParams.get("productData") || []
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [parmaData, setParmaData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  
  return (
    <AppContext.Provider
      value={{
        productData,
        setProductData,
        cartItem,
        setCartItem,
        filterData,
        setFilterData,
        parmaData,
        setParmaData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
