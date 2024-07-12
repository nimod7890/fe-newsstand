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
  const tab = document.createElement("div");
  tab.className = "list-tab border-box";

  if (dataTabId === "all-news-tab") {
    const categoryList = await getCategoryList();

    setTotalTabNumberInListView(categoryList.length);

    categoryList.forEach(({ id, name }) => {
      const categoryComponent = createTabItem({
        innerText: name,
        isSelected: +id === +categoryId,
        children: companies.length && `${companyIndex + 1}/${companies.length}`,
        onClick: async () => await selectCompanyTypeInListView(id),
      });

      tab.appendChild(categoryComponent);
    });
  } else {
    companies.forEach(({ name: companyName }, index) => {
      const companyComponent = createTabItem({
        innerText: companyName,
        isSelected: companyIndex === index,
        children: createIcon({ iconId: "arrow" }),
        onClick: () => selectCompanyByIndexInListView(index),
      });

      tab.appendChild(companyComponent);
    });
  }

  return tab;
}
