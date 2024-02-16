import { LocalStorage, keys } from 'helpers/adapters/localstorage-adapter';

export async function saveCompanyNameToLocalStorage() {
  const application = LocalStorage.get(keys.application);
  const companyName = getCompanyName();

  if(!companyName) return false;

  const companyDataResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/${companyName}.json`);
  let companyData;
  
  try {
    companyData = await companyDataResponse.json();
  } catch (error) {
    companyData = false;
  }

  if(companyData && application !== companyName) LocalStorage.set(keys.application, companyName);

  return companyData;
}

export function getCompanyName() {
  const application = LocalStorage.get(keys.application);

  if(application) return application;

  const queryParams = new URLSearchParams(window.location.search);
  const companyName = queryParams.get('application-for') || application;

  if(!companyName) return false;

  return companyName;
}