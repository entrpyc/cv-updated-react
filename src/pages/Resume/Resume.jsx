/* eslint-disable react-hooks/exhaustive-deps */
import css from './Resume.module.scss';

import React, { useEffect, useContext, useState } from 'react';
import { InterfaceContext } from '../../context/InterfaceContext';
import { FeatureContext } from '../../context/FeatureContext';

import { getCompanyNameFromURL } from 'helpers/uri-resolver';

import DynamicComponent from 'components/DynamicComponent/DynamicComponent';
import About from 'components/About/About';

import { asyncJSONImport } from 'helpers/file-system';
import {
  getCompanyNameFromLocalStorage,
  saveCompanyNameToLocalStorage,
  deleteCompanyNameFromLocalStorage
} from 'helpers/adapters/localstorage-adapter';

function Resume() {
  const { pageInterface, mergeInterface } = useContext(InterfaceContext);
  const { setChatBubbleEnabled } = useContext(FeatureContext);
  const [ pageContent, setPageContent ] = useState([]);

  useEffect(() => {
    const companyNameFromURL = getCompanyNameFromURL();
    const companyName = getCompanyNameFromLocalStorage();
    
    if(!companyNameFromURL && !companyName) return;

    if(companyNameFromURL &&companyNameFromURL !== companyName) saveCompanyNameToLocalStorage(companyNameFromURL);

    const importAndSetData = async () => {
      const importedPageData = await asyncJSONImport(() => import(`./api/${companyNameFromURL || companyName}.json`));
      if(!importedPageData) deleteCompanyNameFromLocalStorage();

      mergeInterface(importedPageData.pageInterface);
      setPageContent(importedPageData.components);
    }

    importAndSetData();
  }, []);

  useEffect(() => {
    setChatBubbleEnabled(false);
  }, []);

  return (
    <div>
      {pageContent?.length ? (
        <div className={css.Cv}>
          <About data={pageInterface.about.data} />
          {pageContent.map((comp, i) =>
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
