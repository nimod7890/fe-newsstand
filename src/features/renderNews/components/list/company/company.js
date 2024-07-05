import { createButton } from "../../../../../components/button/button.js";
import { Company } from "../../../../../types/news.js";

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
export function createCompany(company) {
  const { companyLogo, companyName, updatedDate, mainNews, news } = company;

  const container = document.createElement("div");
  container.className = "list-company-container";

  container.appendChild(createHeader(company));
  return container;
}

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
function createHeader(company) {
  const { companyLogo, companyName, updatedDate } = company;

  const header = document.createElement("div");
  header.className = "company-container-header display-medium12";
  header.insertAdjacentHTML("beforeend", `<img src=${companyLogo} alt='${companyName} 로고'/>`);
  header.insertAdjacentHTML("beforeend", `<time>${formatDateString(updatedDate)}</time>`);
  header.appendChild(createButton({ iconId: "plus", text: "구독하기" }));

  return header;
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

  return `${formattedDate} ${time} 직접 편집`;
}
