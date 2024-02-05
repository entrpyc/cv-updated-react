/* eslint-disable react-hooks/exhaustive-deps */
import css from './CV.module.scss';

import React, { useEffect, useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

import pageDataJSON from './page-data.json';

import { fetchAndSetCompanyData } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';

import DynamicComponent from 'components/DynamicComponent/DynamicComponent';

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
    <div className={css.Cv}>
      {pageData?.components?.map((comp, i) =>
        <DynamicComponent key={i} component={comp.name} props={comp.props} />
      )}
    </div>
  );
}

export default Home;
