/**
 * @typedef {Object} NewsItem
 * @property {number} id
 * @property {string} thumbnailUrl
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef {Object} Company
 * @property {number} id
 * @property {number} companyId
 * @property {string} logoUrl
 * @property {string} name
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
 * @property {'list-view' | 'grid-view' } MainNewsState.viewTabId
 * @property {"all-news-tab" | "subscribed-news-tab"} MainNewsState.dataTabId
 * @property {number | null} MainNewsState.categoryId
 * @property {number} MainNewsState.companyIndex
 * @property {number} MainNewsState.totalTabNumber
 * @property {Company[]} MainNewsState.companies
 */

export const NewsCategory = {};
export const MainNewsState = {};
export const NewsItem = {};
export const Company = {};
