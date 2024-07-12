import { MainNewsState } from "../../../../types/news.js";
import { createTab } from "./tab/tab.js";
import { createCompany } from "./company/company.js";
import { convertStringToFragment } from "../../../../utils/convertStringToFragment.js";

/**
 *
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export async function renderListView(container, state) {
  const company = state.companies[state.companyIndex];

  const tab = await createTab(state);
  const content = company
    ? createCompany(company, state.dataTabId)
    : convertStringToFragment(`<p class='empty-text'>해당하는 언론사가 존재하지 않습니다.</p>`);

  container.append(tab, content);
}
