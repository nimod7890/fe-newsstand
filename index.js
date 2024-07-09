import { createNewsTicker } from "./src/components/newsTicker/newsTicker.js";
import { createSwitcher } from "./src/components/switcher/switcher.js";

import { leftNewsItems, rightNewsItems } from "./src/data/headlineNews.js";
import { dataTabItems, viewTabItems } from "./src/data/tabItems.js";
import { createMainArrowButton } from "./src/features/renderNews/components/@common/mainArrowButton/mainArrowButton.js";

import {
  switchCompanyTab,
  switchCompanyView,
  updateNext,
  updatePrev,
} from "./src/features/renderNews/utils/updateStates.js";

initialize();

function initialize() {
  renderHeader();
  renderHeadlineNewsTicker();
  renderSwitcher();
  renderNewsView();
}

function renderHeader() {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => history.go(0));

  /* render current time */
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
}

/* render headline news ticker */
function renderHeadlineNewsTicker() {
  const container = document.getElementById("news-ticker-container");

  const left = createNewsTicker({ newsItems: leftNewsItems, tag: "연합뉴스" });
  const right = createNewsTicker({ newsItems: rightNewsItems, tag: "연합뉴스" }, 1);

  container.appendChild(left);
  container.appendChild(right);
}

/* render switcher */
function renderSwitcher() {
  const navContainer = document.getElementById("switcher-container");

  const tabSwitcher = createSwitcher({
    className: "tab-switcher",
    items: dataTabItems,
    onClick: (event) => switchCompanyTab(event.target.id),
  });

  const viewSwitcher = createSwitcher({
    className: "view-switcher",
    items: viewTabItems,
    onClick: (event) => switchCompanyView(event.target.id),
  });

  navContainer.appendChild(tabSwitcher);
  navContainer.appendChild(viewSwitcher);
}

/** render news view */
function renderNewsView() {
  switchCompanyTab("all-news-tab");

  const container = document.getElementById("main-news-contents");

  const prevButton = createMainArrowButton({ direction: "prev", onClick: updatePrev });
  const nextButton = createMainArrowButton({ direction: "next", onClick: updateNext });

  container.append(prevButton, nextButton);
}
