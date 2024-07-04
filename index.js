import { createNewsTicker } from "./src/components/newsTicker/newsTicker.js";
import { createSwitcher } from "./src/components/switcher/switcher.js";

import { renderNews } from "./src/features/renderNews.js";

import { leftNewsItems, rightNewsItems } from "./src/data/headlineNews.js";
import { news } from "./src/data/news.js";
import { dataTabItems, viewTabItems } from "./src/data/tabItems.js";

/* render current time */
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("current-date");
  const now = new Date();
  const formattedDate = now.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  });

  timeElement.dateTime = now.toISOString();
  timeElement.textContent = formattedDate;
});

/* render headline news ticker */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-ticker-container");

  const left = createNewsTicker({ newsItems: leftNewsItems, tag: "연합뉴스" });
  const right = createNewsTicker({ newsItems: rightNewsItems, tag: "연합뉴스" }, 1);

  container.appendChild(left);
  container.appendChild(right);
});

/* render switcher & main contents  */
document.addEventListener("DOMContentLoaded", () => {
  /* render switcher */
  const navContainer = document.getElementById("switcher-container");

  const tabSwitcher = createSwitcher({
    className: "tab-switcher",
    items: dataTabItems,
    onClick: handleNewsClick,
  });
  const viewSwitcher = createSwitcher({
    className: "view-switcher",
    items: viewTabItems,
    onClick: handleViewChange,
  });

  navContainer.appendChild(tabSwitcher);
  navContainer.appendChild(viewSwitcher);

  /* render main contents  */

  // initialize
  let currentNewsData = news;
  const listView = document.getElementById("news-list-view");
  const gridView = document.getElementById("news-grid-view");
  let currentViewType = "list-view";
  gridView.style.display = "none";

  // handler
  function handleNewsClick(event) {
    const { id } = event.target;
    currentNewsData = id === "all-news-tab" ? news : [];
    renderNews(listView, gridView, currentNewsData);
  }

  function handleViewChange(event) {
    currentViewType = event.target.id;
    switchView(currentViewType);
  }

  // utils
  function switchView(viewType) {
    const views = {
      list: listView,
      grid: gridView,
    };

    Object.entries(views).forEach(([type, view]) => {
      view.style.display = `${type}-view` === viewType ? "block" : "none";
    });
  }
});
