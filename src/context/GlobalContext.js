import React, { useState, createContext } from 'react'

import {
  experienceData,
  skillsData,
  sidebarData,
  portfolioData,
  aboutData,
} from '../api/page-data';

export const GlobalContext = createContext()

export const GlobalProvider = props => {
  const [ pageData, setPageData ] = useState({
    about: aboutData,
    sidebar: sidebarData,
    experience: experienceData,
    skills: skillsData,
    portfolio: portfolioData,
  });

  return <GlobalContext.Provider value={{
    pageData,
    setPageData,
  }}>
    {props.children}
  </GlobalContext.Provider>
}