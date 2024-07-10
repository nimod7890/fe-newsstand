import http from "./index.js";
import { NewsItem } from "../types/news.js";

/**
 * @return {Promise<{id:number,name:string}[]>}
 */
export const getCategoryList = async () => http.get("/categories");

/**
 * @return {Promise<NewsItem[]>}
 */
export const getHeadlineList = async () => http.get("/headlines");
