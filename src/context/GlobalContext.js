import React, { useState, createContext } from 'react'
export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [ pageData, setPageData ] = useState({});

  return <GlobalContext.Provider value={{
    pageData,
    setPageData,
  }}>
    {props.children}
  </GlobalContext.Provider>
}