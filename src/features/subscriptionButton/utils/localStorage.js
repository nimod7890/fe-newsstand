import { Company } from "../../../types/news.js";

const StorageKeys = Object.freeze({
  SubscribedCompanies: "subscribed_companies",
});

/**
 * @returns {Object}
 */
export function getObjectSubscribedCompanies() {
  return JSON.parse(localStorage.getItem(StorageKeys.SubscribedCompanies)) || {};
}

/**
 * @param {Company} value
 */
export function setSubscribedCompanies(value) {
  localStorage.setItem(StorageKeys.SubscribedCompanies, JSON.stringify(value));
}

/**
 * @param {Company} company
 */
export function addSubscribedCompany(company) {
  const data = getObjectSubscribedCompanies(StorageKeys.SubscribedCompanies) || {};
  data[company.id] = company;
  setSubscribedCompanies(data);
}

/**
 * @param {Company} companyId
 */
export function removeSubscribedCompany(companyId) {
  const companies = getObjectSubscribedCompanies(StorageKeys.SubscribedCompanies);
  if (companies.hasOwnProperty(companyId)) {
    delete companies[companyId];
    setSubscribedCompanies(companies);
  }
}

export function getArraySubscribedCompanies() {
  return Object.values(getObjectSubscribedCompanies(StorageKeys.SubscribedCompanies));
}
