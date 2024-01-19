/* eslint-disable react-hooks/exhaustive-deps */
import './Resume.scss';

import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import pageDataJSON from './page-data.json';

import Sidebar from '../../components/Sidebar/Sidebar';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';
import { LocalStorage } from 'adapters/localstorage/localstorage-adapter';
import { keys } from 'adapters/localstorage/localstorage-adapter';

function Home() {
  const [validApplication, setValidApplication] = useState(false);
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      async function fetchCompanyData() {
        const application = LocalStorage.get(keys.application);

        const queryParams = new URLSearchParams(window.location.search);
        const companyName = queryParams.get('application') || application;

        if(!companyName) return {};
  
        const companyDataResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/${companyName}.json`);
        let companyData;
        
        try {
          companyData = await companyDataResponse.json();
        } catch (error) {
          companyData = false;
        }

        if(companyData && application !== companyName) LocalStorage.set(keys.application, companyName);
        if(companyData) setValidApplication(true);

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
              {validApplication ? (
                <p>Valid</p>
              ) : (
                <p>Invalid</p>
              )}
            </main>
            <Sidebar />
          </div>
        </div>
      </div>
  );
}

export default Home;
