import http from "./index.js";
import { Company, NewsItem } from "../types/news.js";

/**
 * @return {Promise<{id:number,name:string}[]>}
 */
export const getCategoryList = async () => http.get("/categories");

/**
 * @return {Promise<NewsItem[]>}
 */
export const getHeadlineList = async () => http.get("/headlines");

/**
 *
 * @param {number} categoryId
 * @returns {Promise<Company[]>}
 */
export const getCompanyList = ({ categoryId }) => {
  const params = new URLSearchParams();
  categoryId && params.set("categoryId", categoryId);

  return http.get(`/companies?${params.toString()}`);
};
