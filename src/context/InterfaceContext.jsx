import React, { useState, createContext } from 'react';

import websiteDataJSON from '../api/interface-data.json';
import { mergeObjects } from 'helpers/data-aggregation';

export const InterfaceContext = createContext()

export const InterfaceProvider = props => {
  const [ pageInterface, setPageInterface ] = useState(websiteDataJSON);

  function mergeInterface(data) {
    setPageInterface(mergeObjects(
      [pageInterface, data], ['navigation']
    ));
  }

  return <InterfaceContext.Provider value={{
    pageInterface,
    setPageInterface,
    mergeInterface
  }}>
    {props.children}
  </InterfaceContext.Provider>
}