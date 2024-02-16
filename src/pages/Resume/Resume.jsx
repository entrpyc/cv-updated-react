/* eslint-disable react-hooks/exhaustive-deps */
import css from './Resume.module.scss';

import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import { getCompanyName } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';

import DynamicComponent from 'components/DynamicComponent/DynamicComponent';
import { asyncJSONImport } from 'helpers/file-system';

function Home() {
  const [companyData, setCompanyData] = useState(false);
  const [validApplication, setValidApplication] = useState(false);
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      if(companyData) setValidApplication(true);

      setPageData(mergeObjects(
        [pageData, companyData], ['navigation']
      ));
    }

    fetchAndSetPageData();
  }, [companyData]);

  useEffect(() => {
    const importAndSetData = async () => {
      const companyName = getCompanyName();
      const importedPageData = await asyncJSONImport(() => import(`./${companyName}.json`));

      setCompanyData(importedPageData);
    }

    importAndSetData();
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
