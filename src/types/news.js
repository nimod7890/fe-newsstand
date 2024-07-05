/**
 * @typedef {Object} NewsItem
 * @property {number} id - The ID of the news item
 * @property {string} imageUrl
 * @property {string} title - The title of the news item
 * @property {string} url
 */

/**
 * @typedef {Object} Company
 * @property {number} companyId - The ID of the company
 * @property {string} companyLogo - The logo URL of the company
 * @property {string} companyName - The name of the company
 * @property {string} updatedDate - The last updated date of the company
 * @property {NewsItem} mainNews - The main news of the company
 * @property {NewsItem[]} news - The list of news items of the company
 */

/**
 * @typedef {Object} NewsCategory
 * @property {number} id - The ID of the news category
 * @property {string} type - The type of the news category
 * @property {Company[]} company - The list of companies in the news category
 */

/**
 * @typedef {Object} MainNewsState
 * @property {'list-view' | 'grid-view'} MainNewsState.currentView
 * @property {number} MainNewsState.currentTypeIndex
 * @property {number} MainNewsState.currentCompanyIndex
 * @property {Array<NewsItem>} MainNewsState.data
 */

export const NewsCategory = {};
export const MainNewsState = {};
export const NewsItem = {};
export const Company = {};
