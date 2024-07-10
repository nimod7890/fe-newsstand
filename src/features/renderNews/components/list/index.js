import { MainNewsState } from "../../../../types/news.js";
import { createTab } from "./tab/tab.js";
import { createCompany } from "./company/company.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export async function renderListView(container, state) {
  const currentCompany =
    state.currentDataType === "all-news-tab"
      ? state.data[state.currentCategoryIndex - 1]?.companies[state.currentCompanyIndex]
      : state.data[state.currentCompanyIndex];

  if (currentCompany) {
    const tab = await createTab(state);
    const company = createCompany(currentCompany, state.currentDataType);

    container.append(tab, company);
  } else {
    const empty = `<p class='empty-text'>해당하는 언론사가 존재하지 않습니다.</p>`;
    container.appendChild(empty);
  }
}
