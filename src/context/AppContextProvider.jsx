import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

//making use of createContext and useContext for avoiding prop-drilling
export function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [cartItem, setCartItem]=useState([])
  
  return (
    <AppContext.Provider value={{ productData, setProductData, cartItem, setCartItem}}>
      {children}
    </AppContext.Provider>
  );
}


