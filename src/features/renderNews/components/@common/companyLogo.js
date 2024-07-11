import { Company } from "../../../../types/news.js";

/**
 * @param {Company} company
 * @returns {string}
 */
export const createCompanyLogoTemplate = ({ logoUrl, name }) =>
  `<img src=${logoUrl} alt='${name} 로고'/>`;
