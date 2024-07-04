import { createNewsTicker } from "./src/components/newsTicker/newsTicker.js";
import { createSwitcher } from "./src/components/switcher/switcher.js";

import { leftNewsItems, rightNewsItems } from "./src/data/headlineNews.js";
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

/* render data & view switcher  */
document.addEventListener("DOMContentLoaded", () => {
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

  /** handler */

  function handleNewsClick(event) {
    console.log(`Tab with id ${event.target.id} clicked`);
  }

  function handleViewChange(event) {
    console.log(`View with iconId ${event.target.id} selected`);
  }
});
