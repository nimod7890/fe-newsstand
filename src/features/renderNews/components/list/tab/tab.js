import { createIconTemplateStrings } from "../../../../../components/icon/icon.js";
import { companyCategories } from "../../../../../data/companyCategories.js";
import { MainNewsState } from "../../../../../types/news.js";
import { updateCompany, updateCompanyType } from "../../../utils/updateStates.js";
import { createTabItem } from "./tabItem.js";

/**
 * @param {MainNewsState} state
 * @param {string} companyName
 */
export function createTab({ currentCategoryIndex, currentCompanyIndex, currentDataType, data }) {
  const categories = document.createElement("div");
  categories.className = "list-tab";

  if (currentDataType === "all-news-tab") {
    companyCategories.forEach((category, categoryIndex) => {
      const categoryElement = createTabItem({
        innerText: category,
        isSelected: categoryIndex === currentCategoryIndex,
        children: `<p>${currentCompanyIndex + 1}/${
          data[currentCategoryIndex].companies.length
        }</p>`,
      });
      categoryElement.addEventListener("click", () => updateCompanyType(categoryIndex));
      categories.appendChild(categoryElement);
    });
  } else {
    data.forEach(({ companyName }, companyIndex) => {
      const companyElement = createTabItem({
        innerText: companyName,
        isSelected: companyIndex === currentCompanyIndex,
        children: createIconTemplateStrings({ iconId: "arrow" }),
      });
      companyElement.addEventListener("click", () => updateCompany(companyIndex));
      categories.appendChild(companyElement);
    });
  }

  return categories;
}
