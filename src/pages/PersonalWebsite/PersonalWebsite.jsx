/* eslint-disable react-hooks/exhaustive-deps */
import './PersonalWebsite.scss';

import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import pageDataJSON from './page-data.json';

import Sidebar from '../../components/Sidebar/Sidebar';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';

// import MainNavigation from '../../components/MainNavigation/MainNavigation';

function Home() {
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
      <div className="App">
        <div className="container">
          <div className="content">
            <main>
              <About about={pageData.about} info={pageData?.navigation?.info} />
              <Experience experience={pageData.experience} />
              <Portfolio portfolio={pageData.portfolio} />
              <Skills skills={pageData.skills} />
            </main>
            <Sidebar />
          </div>
          
        </div>
      </div>
  );
}

export default Home;
