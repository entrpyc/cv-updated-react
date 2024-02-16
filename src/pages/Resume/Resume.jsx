/* eslint-disable react-hooks/exhaustive-deps */
import css from './Resume.module.scss';

import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import { getCompanyNameFromURL } from 'helpers/uri-resolver';
import { mergeObjects } from 'helpers/data-aggregation';

import DynamicComponent from 'components/DynamicComponent/DynamicComponent';
import { asyncJSONImport } from 'helpers/file-system';
import { getCompanyNameFromLocalStorage, saveCompanyNameToLocalStorage, deleteCompanyNameFromLocalStorage } from 'helpers/adapters/localstorage-adapter';

function Resume() {
  const [companyData, setCompanyData] = useState(false);
  const [validApplication, setValidApplication] = useState(false);
  const { pageData, setPageData } = useContext(GlobalContext);

  useEffect(() => {
    const companyNameFromURL = getCompanyNameFromURL();
    const companyName = getCompanyNameFromLocalStorage();
    
    if(!companyNameFromURL && !companyName) return;

    if(companyNameFromURL &&companyNameFromURL !== companyName) saveCompanyNameToLocalStorage(companyNameFromURL);

    const importAndSetData = async () => {
      const importedPageData = await asyncJSONImport(() => import(`./${companyNameFromURL || companyName}.json`));
      if(!importedPageData) deleteCompanyNameFromLocalStorage();

      setCompanyData(importedPageData);
    }

    importAndSetData();
  }, []);

  useEffect(() => {
    async function fetchAndSetPageData() {  
      setValidApplication(true);


      setPageData(mergeObjects(
        [pageData, companyData], ['navigation']
      ));
    }

    if(companyData) fetchAndSetPageData();
  }, [companyData]);

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

export default Resume;
