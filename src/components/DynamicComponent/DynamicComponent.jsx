import React, { useState, useEffect } from 'react'

import { asyncComponentImport } from 'helpers/file-system';

export const DYNAMIC_MODULES_TYPES = {
  "block": "block",
  "component": "component",
}

function DynamicComponent({ component, props, type = DYNAMIC_MODULES_TYPES.component }) {
  const [dynamicModule, setDynamicModule] = useState(null);

  useEffect(() => {
    // Dynamically import the module/component
    const importDynamicModule = async () => {
      const module = await asyncComponentImport(() => {
        if(type === DYNAMIC_MODULES_TYPES.component) return import(`../../modules/${component}/${component}`);
        if(type === DYNAMIC_MODULES_TYPES.block) return import(`../../modules/Blocks/${component}/${component}`);
      })
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