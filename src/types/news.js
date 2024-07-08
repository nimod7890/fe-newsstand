/**
 * @typedef {Object} NewsItem
 * @property {number} id
 * @property {string} thumbnailUrl
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef {Object} Company
 * @property {number} companyId
 * @property {string} companyLogoUrl
 * @property {string} companyName
 * @property {string} updatedDate
 * @property {NewsItem} mainNews
 * @property {NewsItem[]} newsItems
 */

/**
 * @typedef {Object} NewsCategory
 * @property {number} id
 * @property {string} categoryId
 * @property {Company[]} companies
 */

/**
 * @typedef {Object} MainNewsState
 * @property {'list-view' | 'grid-view'} MainNewsState.currentView
 * @property {"all-news-tab" | "subscribed-news-tab"} MainNewsState.currentDataType
 * @property {number} MainNewsState.currentCategoryIndex
 * @property {number} MainNewsState.currentCompanyIndex
 * @property {NewsCategory[]} MainNewsState.data
 */

export const NewsCategory = {};
export const MainNewsState = {};
export const NewsItem = {};
export const Company = {};
