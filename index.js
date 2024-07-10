import { createNewsTicker } from "./src/components/newsTicker/newsTicker.js";
import { createSwitcher } from "./src/components/switcher/switcher.js";

import { dataTabItems, viewTabItems } from "./src/features/renderNews/constants/tabItems.js";
import { createMainArrowButton } from "./src/features/renderNews/components/@common/mainArrowButton/mainArrowButton.js";

import {
  switchCompanyTab,
  switchCompanyView,
  updateNext,
  updatePrev,
} from "./src/features/renderNews/utils/updateStates.js";
import { getHeadlineList } from "./src/apis/news.js";

initialize();

async function initialize() {
  renderHeader();
  await renderHeadlineNewsTicker();
  renderSwitcher();
  await renderNewsView();
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
async function renderHeadlineNewsTicker() {
  const headlines = await getHeadlineList();

  const container = document.getElementById("news-ticker-container");

  const left = createNewsTicker({ newsItems: headlines.slice(0, 5), tag: "연합뉴스" });
  const right = createNewsTicker({ newsItems: headlines.slice(5), tag: "연합뉴스" }, 1);

  container.append(left, right);
}

/* render switcher */
function renderSwitcher() {
  const navContainer = document.getElementById("switcher-container");

  const tabSwitcher = createSwitcher({
    className: "tab-switcher",
    items: dataTabItems,
    onClick: async (event) => await switchCompanyTab(event.target.id),
  });

  const viewSwitcher = createSwitcher({
    className: "view-switcher",
    items: viewTabItems,
    onClick: (event) => switchCompanyView(event.target.id),
  });

  navContainer.append(tabSwitcher, viewSwitcher);
}

/** render news view */
async function renderNewsView() {
  await switchCompanyTab("all-news-tab");

  const container = document.getElementById("main-news-contents");

  const prevButton = createMainArrowButton({ direction: "prev", onClick: updatePrev });
  const nextButton = createMainArrowButton({ direction: "next", onClick: updateNext });

  container.append(prevButton, nextButton);
}
