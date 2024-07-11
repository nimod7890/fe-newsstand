import { createIcon } from "../../../../../components/icon/icon.js";
import { getCategoryList } from "../../../../../apis/news.js";
import { MainNewsState } from "../../../../../types/news.js";
import {
  setTotalTabNumberInListView,
  selectCompanyByIndexInListView,
  selectCompanyTypeInListView,
} from "../../../utils/updateStates.js";
import { createTabItem } from "./tabItem.js";

/**
 * @param {MainNewsState} state
 */
export async function createTab({ categoryId, companyIndex, dataTabId, companies }) {
  const container = document.createElement("div");
  container.className = "list-tab border-box";

  if (dataTabId === "all-news-tab") {
    const categoryList = await getCategoryList();
    setTotalTabNumberInListView(categoryList.length);

    categoryList.forEach(({ id, name }) => {
      const categoryElement = createTabItem({
        innerText: name,
        isSelected: +id === +categoryId,
        children: `${companyIndex + 1}/${companies.length}`,
        onClick: async () => await selectCompanyTypeInListView(id),
      });

      container.appendChild(categoryElement);
    });
  } else {
    companies.forEach(({ name: companyName }, companyIndex) => {
      const companyElement = createTabItem({
        innerText: companyName,
        isSelected: companyIndex === companyIndex,
        children: createIcon({ iconId: "arrow" }),
        onClick: () => selectCompanyByIndexInListView(companyIndex),
      });

      container.appendChild(companyElement);
    });
  }

  return container;
}
