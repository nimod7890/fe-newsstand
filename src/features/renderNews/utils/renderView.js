import { MainNewsState } from "../../../types/news.js";
import { renderGridView } from "../components/grid/index.js";
import { renderListView } from "../components/list/index.js";

const renderView = {
  ["list-view"]: renderListView,
  ["grid-view"]: renderGridView,
};

/**
 * @param {MainNewsState} state
 */
export function render(state) {
  const containerElement = document.getElementById("news-container");
  containerElement.className = "border-box";
  containerElement.innerHTML = "";
  renderView[state.viewTabId](containerElement, state);
}
