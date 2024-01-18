import React, { useState, createContext, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [ pageData, setPageData ] = useState({});
  const [ message, setMessage ] = useState('');
  const [ messageVisible, setMessageVisible ] = useState(false);

  const setMessageWithTimeout = (str) => {
    if(str === false) {
      setMessageVisible(false);
      return;
    }

    setMessage(str);
    setMessageVisible(true);    
  }

  useEffect(() => {
    let timeoutId;

    if (messageVisible) {
      timeoutId = setTimeout(() => {
        setMessageVisible(false);
      }, 8000);
    }

    return () => clearTimeout(timeoutId)
  }, [messageVisible]);

  return <GlobalContext.Provider value={{
    pageData,
    setPageData,
    message,
    messageVisible,
    setMessage: setMessageWithTimeout
  }}>
    {props.children}
  </GlobalContext.Provider>
}