import { createIconTemplateStrings } from "../../../../../components/icon/icon.js";
import { MainNewsState } from "../../../../../types/news.js";
import { updateCompanyType } from "../../../utils/updateStates.js";

/**
 * @param {string} category
 * @param {number} categoryId
 * @param {string} companyName
 * @param {MainNewsState} state
 * @returns {HTMLButtonElement}
 */
export function createCategory(category, categoryId, companyName, state) {
  const { currentDataType, currentCategoryIndex } = state;

  const isSelected = currentCategoryIndex === categoryId;

  const button = document.createElement("button");
  button.className = classMapping[isSelected];

  button.innerHTML = `<p>${currentDataType === "all-news-tab" ? category : companyName}</p>`;

  if (isSelected) {
    const additionalComponent = createCategoryDetails(state);
    button.insertAdjacentHTML("beforeend", additionalComponent);
  }

  button.addEventListener("click", () => updateCompanyType(categoryId));
  return button;
}

/** button class */

const classes = {
  base: "list-category-button",
  unselected: "available-medium14",
  selected: "selected-bold14 selected-category",
};

const classMapping = {
  true: `${classes.base} ${classes.selected}`,
  false: `${classes.base} ${classes.unselected}`,
};

/** components */

/**
 * @param {MainNewsState} state
 * @returns {string}
 */
function createCategoryDetails(state) {
  switch (state.currentDataType) {
    case "all-news-tab":
      return `<p>${state.currentCompanyIndex + 1}/${
        state.data[state.currentCategoryIndex].companies.length
      }</p>`;
    case "subscribed-news-tab":
      return createIconTemplateStrings({ iconId: "arrow" });
    default:
      return;
  }
}
