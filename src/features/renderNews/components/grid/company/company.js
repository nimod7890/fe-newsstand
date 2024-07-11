import { createSubscriptionButton } from "../../../../subscriptionButton/components/subscriptionButton.js";
import { getObjectSubscribedCompanies } from "../../../../subscriptionButton/utils/localStorage.js";
import { createCompanyLogoTemplate } from "../../@common/companyLogo.js";

/**
 * @param {Object} props
 * @param {HTMLDivElement} props.container
 * @param {Company} props.company
 * @returns {HTMLDivElement}
 */
export function renderCompany({ container, company, dataType }) {
  container.classList.add("grid-item-company");

  const companyLogo = document.createElement("div");
  companyLogo.innerHTML = createCompanyLogoTemplate(company);

  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = Object.hasOwn(subscriptions, company.id);
  const subscriptionButton = createSubscriptionButton({
    company,
    isSubscribed,
    dataType,
    isGridView: true,
  });

  subscriptionButton.classList.add("hover-hidden");

  container.addEventListener("mouseenter", () => {
    companyLogo.classList.add("hover-hidden");
    subscriptionButton.classList.remove("hover-hidden");
  });

  container.addEventListener("mouseleave", () => {
    companyLogo.classList.remove("hover-hidden");
    subscriptionButton.classList.add("hover-hidden");
  });

  container.append(companyLogo, subscriptionButton);
}
