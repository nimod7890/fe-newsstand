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
  const currentCompany = state.data[state.currentCompanyIndex];
  console.log(state);
  if (currentCompany) {
    const tab = await createTab(state);
    const company = createCompany(currentCompany, state.currentDataType);
    container.append(tab, company);
  } else {
    // Todo: 전체 언론사 페이지에서 선택한 카테고리 내 언론사 데이터 존재하지 않는 경우 에러 처리 필요
    const empty = convertStringToFragment(
      `<p class='empty-text'>해당하는 언론사가 존재하지 않습니다.</p>`
    );
    container.appendChild(empty);
  }
}
