import { createIcon } from "../../../../../components/icon/icon.js";
import { getCategoryList } from "../../../../../apis/news.js";
import { MainNewsState } from "../../../../../types/news.js";
import {
  setTotalTabNumber,
  updateCompany,
  updateCompanyType,
} from "../../../utils/updateStates.js";
import { createTabItem } from "./tabItem.js";

/**
 * @param {MainNewsState} state
 */
export async function createTab({ currentTabId, currentCompanyIndex, currentDataType, data }) {
  const container = document.createElement("div");
  container.className = "list-tab border-box";

  if (currentDataType === "all-news-tab") {
    const categoryList = await getCategoryList();
    setTotalTabNumber(categoryList.length);

    categoryList.forEach(({ id, name }) => {
      const categoryElement = createTabItem({
        innerText: name,
        isSelected: id === currentTabId,
        children: `${currentCompanyIndex + 1}/${data[currentTabId - 1].companies.length}`,
        onClick: () => updateCompanyType(id),
      });

      container.appendChild(categoryElement);
    });
  } else {
    data.forEach(({ name: companyName }, companyIndex) => {
      const companyElement = createTabItem({
        innerText: companyName,
        isSelected: companyIndex === currentCompanyIndex,
        children: createIcon({ iconId: "arrow" }),
        onClick: () => updateCompany(companyIndex),
      });

      container.appendChild(companyElement);
    });
  }

  return container;
}
