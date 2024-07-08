import { companyCategories } from "../../../../../data/companyCategories.js";
import { MainNewsState } from "../../../../../types/news.js";
import { updateCompany, updateCompanyType } from "../../../utils/updateStates.js";
import { createTabItem } from "./tabItem.js";

/**
 * @param {MainNewsState} state
 * @param {string} companyName
 */
export function createTab(state) {
  const categories = document.createElement("div");
  categories.className = "list-tab";

  if (state.currentDataType === "all-news-tab") {
    companyCategories.forEach((category, index) => {
      const categoryElement = createTabItem({
        innerText: category,
        state,
        isSelected: index === state.currentCategoryIndex,
      });
      categoryElement.addEventListener("click", () => updateCompanyType(index));
      categories.appendChild(categoryElement);
    });
  } else {
    state.data.forEach(({ companyName }, companyIndex) => {
      const companyElement = createTabItem({
        innerText: companyName,
        state,
        isSelected: companyIndex === state.currentCompanyIndex,
      });
      companyElement.addEventListener("click", () => updateCompany(companyIndex));
      categories.appendChild(companyElement);
    });
  }

  return categories;
}
