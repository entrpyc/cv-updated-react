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
}

export const keys = {
  application: 'application',
}