/* eslint-disable react-hooks/exhaustive-deps */
import css from './Resume.module.scss';

import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import { fetchAndSetCompanyData } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';

import DynamicComponent from 'components/DynamicComponent/DynamicComponent';

function Home() {
  const [validApplication, setValidApplication] = useState(false);
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      const companyData = await fetchAndSetCompanyData();
      if(companyData) setValidApplication(true);

      setPageData(mergeObjects(
        [pageData, companyData], ['navigation']
      ));
    }

    fetchAndSetPageData();
  }, []);

  return (
    <div>
      {validApplication ? (
        <div className={css.Cv}>
          {pageData?.components?.map((comp, i) =>
            <DynamicComponent key={i} component={comp.name} props={comp.props} />
          )}
        </div>
      ) : (
        <p>Invalid</p>
      )}
    </div>
  );
}

export default Home;
