import React, { useState, useEffect } from 'react'

function DynamicComponent({ component, props }) {
  const [dynamicModule, setDynamicModule] = useState(null);

  useEffect(() => {
    // Dynamically import the module/component
    const importDynamicModule = async () => {
      try {
        const module = await import(`../../components/${component}/${component}`);
        setDynamicModule(module);
      } catch (error) {
        console.error('Error loading dynamic module:', error);
      }
    };

    importDynamicModule();
  }, []);

  if (!dynamicModule) {
    return <div>Loading...</div>;
  }

  return <dynamicModule.default {...props} />;
};

export default DynamicComponent