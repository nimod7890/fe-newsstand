/**
 * @typedef {Object} MainNews
 * @property {number} id - The ID of the main news
 * @property {string} src - The source URL of the main news
 * @property {string} title - The title of the main news
 */

/**
 * @typedef {Object} NewsItem
 * @property {number} id - The ID of the news item
 * @property {string} title - The title of the news item
 */

/**
 * @typedef {Object} Company
 * @property {number} companyId - The ID of the company
 * @property {string} companyLogo - The logo URL of the company
 * @property {string} companyName - The name of the company
 * @property {string} updatedDate - The last updated date of the company
 * @property {MainNews} mainNews - The main news of the company
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
 * @property {'list-view' | 'grid-view'} MainNews.currentView
 * @property {number} MainNews.currentTypeIndex
 * @property {number} MainNews.currentCompanyIndex
 * @property {Array<MainNews>} MainNews.data
 */

export const NewsCategory = {};
export const MainNewsState = {};
export const MainNews = {};
export const NewsItem = {};
export const Company = {};
