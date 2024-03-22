/* eslint-disable react-hooks/exhaustive-deps */
import pageDataJSON from './api/page-data.json';

import React, { useEffect, useContext } from 'react';
import { InterfaceContext } from 'context/InterfaceContext';
import { FeatureContext } from 'context/FeatureContext';


import DynamicComponent from 'components/DynamicComponent/DynamicComponent';
import About from 'components/About/About';

function CV() {
  const { pageInterface, mergeInterface } = useContext(InterfaceContext);
  const { setChatBubbleEnabled } = useContext(FeatureContext);

  useEffect(() => {
    if(pageDataJSON.pageInterface) mergeInterface(pageDataJSON.pageInterface);
    setChatBubbleEnabled(true);
  }, []);

  return (
    <div className="pdf">
      <About data={pageInterface.about.data} />
      {pageDataJSON?.components?.map((comp, i) =>
        <DynamicComponent key={i} component={comp.name} props={comp.props} />
      )}
    </div>
  );
}

export default CV;