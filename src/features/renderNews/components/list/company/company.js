import { Company, NewsItem } from "../../../../../types/news.js";
import { convertStringToFragment } from "../../../../../utils/convertStringToFragment.js";
import { createSubscriptionButton } from "../../../../subscriptionButton/components/subscriptionButton.js";
import { getObjectSubscribedCompanies } from "../../../../subscriptionButton/utils/localStorage.js";
import { createCompanyLogoTemplate } from "../../@common/companyLogo.js";

/**
 * @param {Company} company
 * @param {"all-news-tab" | "subscribed-news-tab"} dataType
 * @returns {HTMLDivElement}
 */
export function createCompany(company, dataType) {
  const container = document.createElement("div");
  container.className = "list-company-container border-box";

  const header = createHeader(company, dataType);
  const contents = createMainContents(company);

  container.append(header, contents);

  return container;
}

/**
 * @param {Company} company
 * @param {"all-news-tab" | "subscribed-news-tab"} dataType
 * @returns {HTMLDivElement}
 */
function createHeader(company, dataType) {
  const { id, updatedDate } = company;

  const header = document.createElement("div");
  header.className = "company-container-header display-medium12";

  const companyLogo = convertStringToFragment(createCompanyLogoTemplate(company));
  const date = convertStringToFragment(`<time>${formatDateString(updatedDate)}</time>`);
  header.append(companyLogo, date);

  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = Object.hasOwn(subscriptions, id);
  const subscriptionButton = createSubscriptionButton({
    company,
    dataTabId: dataType,
    isSubscribed,
  });
  header.appendChild(subscriptionButton);

  return header;
}

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
function createMainContents({ newsItems, name, mainNews }) {
  const thumbnailNews = createStringMainNews(mainNews);
  const newsList = createStringNewsList(newsItems, name);

  const contentsString = `<div class='company-container-contents'>
                            ${thumbnailNews}
                            ${newsList}
                          </div>`;

  return convertStringToFragment(contentsString);
}

/**
 * @param {NewsItem} mainNews
 * @returns {string}
 */
function createStringMainNews(mainNews) {
  const { thumbnailUrl } = mainNews;

  const newsTitle = createStringNewsTitle(mainNews);

  return `<div class='main-news'>
            <img loading='lazy' src=${thumbnailUrl} alt='메인 뉴스 썸네일'/>
            ${newsTitle}
          </div>`;
}

/**
 * @param {NewsItem[]} newsList
 * @param {string} name
 * @returns {string}
 */
function createStringNewsList(newsList, name) {
  const newsElements = newsList.map(createStringNewsTitle).join("");

  return `<ul class="news-list">
            ${newsElements}
            <p class="display-medium14">${name}에서 직접 편집한 뉴스입니다.</p>
          </ul>`;
}

/**
 * @param {NewsItem} news
 * @returns {string}
 */
function createStringNewsTitle({ url, title }) {
  return `<a class='display-medium16 ellipsis' href=${url} target='_blank'>${title}</a>`;
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
