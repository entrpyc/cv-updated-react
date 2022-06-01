import React, { useState, createContext } from 'react'

import {
  experienceData,
  sidebarData,
  portfolioData,
  contactData,
} from './api';

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [experience] = useState(experienceData)
  const [sidebar] = useState(sidebarData)
  const [portfolio] = useState(portfolioData)
  const [contact] = useState(contactData)

  return <GlobalContext.Provider value={{
    experience,
    sidebar,
    portfolio,
    contact,
  }}>
    {props.children}
  </GlobalContext.Provider>
}