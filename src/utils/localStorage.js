export const StorageKeys = Object.freeze({
  SubscribedCompanies: "subscribed_companies",
});

/**
 * @returns {any}
 */
export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

/**
 * @param {any} value
 */
export function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @param {any} item
 */
export function addToLocalStorageArray(key, item) {
  const array = getFromLocalStorage(key);
  if (!array.includes(item)) {
    array.push(item);
    setToLocalStorage(key, array);
  }
}

/**
 * @param {any} item
 */
export function removeFromLocalStorageArray(key, item) {
  const array = getFromLocalStorage(key);
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
    setToLocalStorage(key, array);
  }
}
