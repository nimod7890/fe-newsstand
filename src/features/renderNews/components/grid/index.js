import { MainNewsState } from "../../../../types/news.js";
import { GRID_ITEM_PER_PAGE } from "../../constants/gridItemPerPage.js";
import { renderCompany } from "./company/company.js";

/**
 * @param {HTMLElement} viewContainer
 * @param {MainNewsState} state
 */
export function renderGridView(viewContainer, { companies, currentDataIndex, currentDataType }) {
  viewContainer.classList.add("grid-company-container");

  const currentCompanies = companies.slice(currentDataIndex, currentDataIndex + GRID_ITEM_PER_PAGE);

  for (let i = 0; i < GRID_ITEM_PER_PAGE; i++) {
    const company = currentCompanies[i];

    let companyContainer = createCompanyContainer();

    company && renderCompany({ container: companyContainer, company, dataType: currentDataType });

    viewContainer.appendChild(companyContainer);
  }
}

function createCompanyContainer() {
  let container = document.createElement("div");
  container.className = "grid-item border-box";
  return container;
}
