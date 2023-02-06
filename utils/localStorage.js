// more robust way to get items from local storage
// this is a wrapper- function that will improve the performance on another function
export function getLocalStorage(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return undefined;
  }
}

export function setLocalStorage(key, value) {
  // if we are in the browser
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
