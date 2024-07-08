import { MainNewsState } from "../../../../types/news.js";
import { createCategories } from "./categories/categories.js";
import { createCompany } from "./company/company.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderListView(container, state) {
  const currentCategory = state.data[state.currentCategoryIndex];
  const currentCompany = currentCategory?.companies[state.currentCompanyIndex];

  if (currentCompany) {
    // 언론사 카테고리
    container.appendChild(createCategories(state, currentCompany.companyName));
    // 언론사
    container.appendChild(createCompany(currentCompany));
  }
}
