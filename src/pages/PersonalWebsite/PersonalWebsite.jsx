/* eslint-disable react-hooks/exhaustive-deps */
import './PersonalWebsite.scss';

import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import pageDataJSON from './page-data.json';

import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';

import { fetchAndSetCompanyData } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';


function Home() {
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      const companyData = await fetchAndSetCompanyData();

      setPageData(mergeObjects(
        [pageData, pageDataJSON, companyData], ['navigation']
      ));
    }

    fetchAndSetPageData();
  }, []);

  return (
      <>
        <About about={pageData.about} info={pageData?.navigation?.info} />
        <Experience experience={pageData.experience} />
        <Portfolio portfolio={pageData.portfolio} />
        <Skills skills={pageData.skills} />
      </>
  );
}

export default Home;
