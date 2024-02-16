export async function asyncComponentImport(importFunction) {
  let result = false;

  try {
    const importedJSON = await importFunction();
    if(importedJSON) result = importedJSON; 
  } catch (error) {
    console.error('Error loading dynamic data:', error);
  }

  return result;
};

export async function asyncJSONImport(importFunction) {
  let result = await asyncComponentImport(importFunction);

  return result?.default || false;
};