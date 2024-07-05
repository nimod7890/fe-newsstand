import { MainNewsState } from "../../../../types/news.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderListView(container, state) {
  const currentType = state.data[state.currentTypeIndex];
  const currentCompany = currentType?.company[state.currentCompanyIndex];

  container;
  currentType;
  currentCompany;
}
