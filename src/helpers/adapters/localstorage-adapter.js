export class LocalStorage {
  static get(str) {
    const val = localStorage.getItem(str);
    const parsedValue = JSON.parse(val);

    return parsedValue;
  }

  static set(key, str) {
    const string = JSON.stringify(str);
    
    localStorage.setItem(key, string);
  }

  static delete(key) {
    localStorage.removeItem(key);
  }
}

export const keys = {
  application: 'application',
}

export function getCompanyNameFromLocalStorage() {
  const companyName = LocalStorage.get(keys.application);

  return companyName || false;
}

export async function saveCompanyNameToLocalStorage(companyName) {
  LocalStorage.set(keys.application, companyName);
}

export async function deleteCompanyNameFromLocalStorage() {
  LocalStorage.delete(keys.application);
}
