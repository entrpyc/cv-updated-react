/* eslint-disable react-hooks/exhaustive-deps */
// import css from './Resume.module.scss';

import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import pageDataJSON from './page-data.json';

import { fetchAndSetCompanyData } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';

function Home() {
  const [validApplication, setValidApplication] = useState(false);
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      const companyData = await fetchAndSetCompanyData();
      if(companyData) setValidApplication(true);

      setPageData(mergeObjects(
        [pageData, pageDataJSON, companyData], ['navigation']
      ));
    }

    fetchAndSetPageData();
  }, []);

  return (
    <div>
      {validApplication ? (
        <p>Valid</p>
      ) : (
        <p>Invalid</p>
      )}
    </div>
  );
}

export default Home;
