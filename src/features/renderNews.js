/**
 * Render news in both views
 * @param {HTMLElement} listView
 * @param {HTMLElement} gridView
 * @param {Array} newsData
 */
export function renderNews(listView, gridView, newsData) {
  listView.innerHTML = "";
  gridView.innerHTML = "";
  renderNewsList(listView, newsData);
  renderNewsGrid(gridView, newsData);
}

/**
 * @param {HTMLElement} container
 * @param {Array} newsData
 */
function renderNewsList(container, newsData) {
  console.log("rerender list");
}

/**
 * @param {HTMLElement} container
 * @param {Array} newsData
 */
function renderNewsGrid(container, newsData) {
  console.log("rerender grid");
}
