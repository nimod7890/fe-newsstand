import { MainNewsState } from "../../../../types/news.js";

/**
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderGridView(container, state) {
  const { companies, currentDataIndex } = state;

  container.classList.add("grid-company-container");

  companies.slice(currentDataIndex, currentDataIndex + 24).forEach((company) => {
    const companyElement = document.createElement("div");
    companyElement.innerText = company.name;
    container.appendChild(companyElement);
  });
}
