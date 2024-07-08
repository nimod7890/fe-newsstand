import { createButton } from "../../../../../components/button/button.js";
import { Company, NewsItem } from "../../../../../types/news.js";

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
export function createCompany(company) {
  const container = document.createElement("div");
  container.className = "list-company-container";

  container.appendChild(createHeader(company));
  container.appendChild(createNewsContents(company));

  return container;
}

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
function createHeader(company) {
  const { companyLogoUrl, companyName, updatedDate } = company;

  const header = document.createElement("div");
  header.className = "company-container-header display-medium12";
  header.insertAdjacentHTML("beforeend", `<img src=${companyLogoUrl} alt='${companyName} 로고'/>`);
  header.insertAdjacentHTML("beforeend", `<time>${formatDateString(updatedDate)}</time>`);
  header.appendChild(createButton({ iconId: "plus", text: "구독하기" }));

  return header;
}

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
function createNewsContents(company) {
  const { newsItems, companyName, mainNews } = company;
  const newsContentscontainer = document.createElement("div");
  newsContentscontainer.className = "company-container-contents";

  newsContentscontainer.appendChild(createMainNews(mainNews));
  newsContentscontainer.appendChild(createNewsList(newsItems, companyName));

  return newsContentscontainer;
}

/**
 * @param {NewsItem} mainNews
 * @returns {HTMLDivElement}
 */
function createMainNews(mainNews) {
  const { thumbnailUrl: imageUrl } = mainNews;

  const mainNewsContainer = document.createElement("div");
  mainNewsContainer.className = "main-news";
  mainNewsContainer.insertAdjacentHTML(
    "beforeend",
    `<img loading='lazy' src=${imageUrl} alt='메인 뉴스 썸네일'/>`
  );
  mainNewsContainer.appendChild(createNewsTitle(mainNews));

  return mainNewsContainer;
}

/**
 * @param {NewsItem[]} newsList
 * @param {string} companyName
 * @returns {HTMLUListElement}
 */
function createNewsList(newsList, companyName) {
  const newsListContainer = document.createElement("ul");
  newsListContainer.className = "news-list";

  newsList.forEach((news) => {
    const newsElement = document.createElement("li");
    newsElement.appendChild(createNewsTitle(news));
    newsListContainer.appendChild(newsElement);
  });

  newsListContainer.insertAdjacentHTML(
    "beforeend",
    `<p class='display-medium14'>${companyName}에서 직접 편집한 뉴스입니다.</p>`
  );

  return newsListContainer;
}

/**
 * @param {NewsItem} news
 * @returns {HTMLUListElement}
 */
function createNewsTitle(news) {
  const { src = "#", title } = news;

  const titleElement = document.createElement("a");
  titleElement.className = "available-medium16";
  titleElement.src = src;
  titleElement.textContent = title;

  return titleElement;
}

/**
 * @param {string} isoString
 * @returns {string}
 */
function formatDateString(isoString) {
  const date = new Date(isoString);

  const formattedDate = date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, ".")
    .trim();

  const time = date.toISOString().split("T")[1].substring(0, 5);

  return `${formattedDate} ${time} 편집`;
}
