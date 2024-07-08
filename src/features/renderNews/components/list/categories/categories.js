import { companyCategories } from "../../../../../data/companyCategories.js";
import { MainNewsState } from "../../../../../types/news.js";
import { createCategory } from "./category.js";

/**
 * @param {MainNewsState} state
 * @param {string} companyName
 */
export function createCategories(state, companyName) {
  const categories = document.createElement("div");
  categories.className = "list-categories-container";

  companyCategories.forEach((category, categoryId) => {
    const categoryElement = createCategory(category, categoryId, companyName, state);
    categories.appendChild(categoryElement);
  });

  return categories;
}
