import { MainNewsState } from "../../../../types/news.js";
import { createCompany } from "./company/company.js";

/**
 * @param {HTMLElement} container
 * @param {MainNewsState} state
 */
export function renderGridView(container, state) {
  const { companies, currentDataIndex } = state;

  container.classList.add("grid-company-container");

  const currentPage = companies.slice(currentDataIndex, currentDataIndex + 24);

  currentPage.forEach((company) => {
    const companyElement = createCompany(company);
    container.appendChild(companyElement);
  });
}
