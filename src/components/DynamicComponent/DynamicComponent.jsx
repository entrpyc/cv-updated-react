import React, { useState, useEffect } from 'react'

import { asyncComponentImport } from 'helpers/file-system';

function DynamicComponent({ component, props }) {
  const [dynamicModule, setDynamicModule] = useState(null);

  useEffect(() => {
    // Dynamically import the module/component
    const importDynamicModule = async () => {
      const module = await asyncComponentImport(() => import(`../../modules/${component}/${component}`))
      setDynamicModule(module);
    };


    importDynamicModule();
  }, []);

  if (!dynamicModule) {
    return <div>Loading...</div>;
  }

  return <dynamicModule.default {...props} />;
};

export default DynamicComponent