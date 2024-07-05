import { MainNewsState } from "../../../../types/news.js";
import { createCompany } from "./company/company.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderListView(container, state) {
  const currentType = state.data[state.currentTypeIndex];
  const currentCompany = currentType?.company[state.currentCompanyIndex];
  if (currentCompany) container.appendChild(createCompany(currentCompany));
}
