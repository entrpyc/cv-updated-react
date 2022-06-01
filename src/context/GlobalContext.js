import React, { useState, createContext } from 'react'

import {
  experienceData,
  sidebarData,
  portfolioData,
  aboutData,
} from '../api/page-data';

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [about] = useState(aboutData)
  const [experience] = useState(experienceData)
  const [sidebar] = useState(sidebarData)
  const [portfolio] = useState(portfolioData)

  return <GlobalContext.Provider value={{
    about,
    experience,
    sidebar,
    portfolio,
  }}>
    {props.children}
  </GlobalContext.Provider>
}