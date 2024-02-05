export const mergeObjects = (objectsArray, propertiesArray) => {
  let combinedObject = Object.assign({}, ...objectsArray);

  if(propertiesArray) propertiesArray.forEach(prop => {
    combinedObject[prop] = objectsArray.reduce((acc, obj) => ({ ...acc, ...obj[prop] }), combinedObject[prop] || {});
  });

  return combinedObject;
}

export const capitalize = (str) => str[0].toUpperCase() + str.slice(1, str.length);