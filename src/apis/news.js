import http from "./index.js";

/**
 * @return {Promise<{id:number,name:string}[]>}
 */
export const getCategoryList = async () => http.get("/categories");
