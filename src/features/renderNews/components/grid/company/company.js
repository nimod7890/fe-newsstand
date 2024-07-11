import { createCompanyLogoTemplate } from "../../@common/companyLogo.js";

/**
 * @param {Company} company
 * @returns {HTMLDivElement}
 */
export function createCompany(company) {
  const companyElement = document.createElement("div");
  companyElement.className = "grid-company";

  const logo = createCompanyLogoTemplate(company);
  companyElement.innerHTML = logo;

  return companyElement;
}
