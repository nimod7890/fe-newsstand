import { createIconTemplateStrings } from "../../../../../components/icon/icon.js";
import { MainNewsState } from "../../../../../types/news.js";

/**
 * @param {Object} props
 * @param {string} props.innerText
 * @param {MainNewsState} props.state
 * @param {boolean} props.isSelect
 * @returns {HTMLButtonElement}
 */
export function createTabItem({ innerText, state, isSelected }) {
  const button = document.createElement("button");
  button.className = classMapping[isSelected];
  button.innerHTML = `<p>${innerText}</p>`;

  if (isSelected) {
    const additionalComponent = createCategoryDetails(state);
    button.insertAdjacentHTML("beforeend", additionalComponent);
  }

  return button;
}

/** button class */

const classes = {
  base: "list-tab-item",
  unselected: "available-medium14",
  selected: "selected-bold14 selected-tab",
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
