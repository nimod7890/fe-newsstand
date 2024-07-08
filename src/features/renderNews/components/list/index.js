import { MainNewsState } from "../../../../types/news.js";
import { createCompany } from "./company/company.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderListView(container, state) {
  const currentCategory = state.data[state.currentCategoryIndex];
  const currentCompany = currentCategory.companies[state.currentCompanyIndex];
  container.appendChild(createCompany(currentCompany));
}
