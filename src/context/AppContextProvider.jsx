import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();


export function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  
  return (
    <AppContext.Provider value={{ productData, setProductData }}>
      {children}
    </AppContext.Provider>
  );
}


