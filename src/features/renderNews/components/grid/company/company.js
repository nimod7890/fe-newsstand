import { createSubscriptionButton } from "../../../../subscriptionButton/components/subscriptionButton.js";
import { getObjectSubscribedCompanies } from "../../../../subscriptionButton/utils/localStorage.js";
import { createCompanyLogoTemplate } from "../../@common/companyLogo.js";

/**
 * @param {Object} props
 * @param {HTMLDivElement} props.container
 * @param {Company} props.company
 * @param {} props.dataType
 * @returns {HTMLDivElement}
 */
export function renderCompany({ container, company, dataType }) {
  container.classList.add("grid-item-company");

  const logo = createCompanyLogoTemplate(company);
  container.innerHTML = logo;

  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = Object.hasOwn(subscriptions, company.id);
  const subscriptionButton = createSubscriptionButton({
    company,
    isSubscribed,
    dataType,
  });

  container.addEventListener("mouseenter", () => {
    container.dataset.originalContent = container.innerHTML;
    container.innerHTML = "";
    container.appendChild(subscriptionButton);
  });

  container.addEventListener("mouseleave", () => {
    container.innerHTML = container.dataset.originalContent;
  });
}
