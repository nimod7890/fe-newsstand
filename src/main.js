import { createNewsTicker } from "./components/newsTicker/newsTicker.js";
import { createSwitcher } from "./components/switcher/switcher.js";

import { dataTabItems, viewTabItems } from "./features/renderNews/constants/tabItems.js";
import { createMainArrowButton } from "./features/renderNews/components/@common/mainArrowButton/mainArrowButton.js";

import {
  switchCompanyData,
  switchCompanyView,
  updateNext,
  updatePrev,
  renderInit,
} from "./features/renderNews/utils/updateStates.js";
import { getHeadlineList } from "./apis/news.js";

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
  const headlinesData = await getHeadlineList();

  const container = document.getElementById("news-ticker-container");

  const leftNewsTicker = createNewsTicker({
    newsItems: headlinesData.slice(0, 5),
    tag: "연합뉴스",
  });
  const rightNewsTicker = createNewsTicker({ newsItems: headlinesData.slice(5), tag: "연합뉴스" });

  container.append(leftNewsTicker, rightNewsTicker);
}

/* render switcher */
function renderSwitcher() {
  const container = document.getElementById("switcher-container");

  const dataSwitcher = createSwitcher({
    className: "data-switcher",
    items: dataTabItems,
    onClick: async (event) => await switchCompanyData({ dataTabId: event.target.id }),
  });

  const viewSwitcher = createSwitcher({
    className: "view-switcher",
    items: viewTabItems,
    onClick: async (event) => await switchCompanyView(event.target.id),
  });

  container.append(dataSwitcher, viewSwitcher);
}

/** render news view */
async function renderNewsView() {
  await renderInit();

  const container = document.getElementById("main-news-contents");

  const prevButton = createMainArrowButton({ direction: "prev", onClick: updatePrev });
  const nextButton = createMainArrowButton({ direction: "next", onClick: updateNext });

  container.append(prevButton, nextButton);
}
