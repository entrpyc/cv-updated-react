import css from './Resume.module.scss'

import React, { useContext, useEffect } from 'react'
import { GlobalContext } from 'context/GlobalContext';

import pageDataJSON from './page-data.json';

import Profile from 'components/Resume/components/Profile/Profile';
import WorkExperience from 'components/Resume/components/WorkExperience/WorkExperience';
import Skills from 'components/Resume/components/Skills/Skills';



const Resume = () => {
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      async function fetchCompanyData() {
        const queryParams = new URLSearchParams(window.location.search);
        const companyName = queryParams.get('application-for');

        if(!companyName) return {};
  
        const companyDataResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/${companyName}.json`);
        let companyData;
        
        try {
          companyData = await companyDataResponse.json();
        } catch (error) {
          companyData = false;
        }
  
        return companyData || {};
      }
  
      const pageData = pageDataJSON;
      const companyData = await fetchCompanyData();
  
      setPageData({
        ...pageData,
        ...companyData
      });
    }

    fetchAndSetPageData();
  }, []);

  return (
    <div className={css.resumeBlock}>
        <div className='sideBar'>
          <Profile profile={pageData.profile} />
          <Skills skills={pageData.skills} />
        </div>
        <div>
          <WorkExperience workExperience={pageData.workExperience}/>
        </div>
    </div>
  )
}

export default Resume