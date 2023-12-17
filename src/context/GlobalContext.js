import React, { useState, createContext } from 'react'

import {
  experienceData,
  skillsData,
  sidebarData,
  portfolioData,
  aboutData,
  bioData,
} from '../api/page-data';

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [ about ] = useState(aboutData)
  const [ experience ] = useState(experienceData)
  const [ skills ] = useState(skillsData)
  const [ sidebar ] = useState(sidebarData)
  const [ portfolio ] = useState(portfolioData)
  const [ bio ] = useState(bioData)

  return <GlobalContext.Provider value={{
    about,
    experience,
    sidebar,
    portfolio,
    skills,
    bio,
  }}>
    {props.children}
  </GlobalContext.Provider>
}