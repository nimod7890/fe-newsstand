import { renderGridView } from "../components/grid/renderNewsGrid.js";
import { renderListView } from "../components/list/renderNewsList.js";

const renderView = {
  ["list-view"]: renderListView,
  ["grid-view"]: renderGridView,
};

export function render(state) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  renderView[state.currentView](container, state);
}
