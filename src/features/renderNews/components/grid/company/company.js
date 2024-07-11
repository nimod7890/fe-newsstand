import { createSubscriptionButton } from "../../../../subscriptionButton/components/subscriptionButton.js";
import { getObjectSubscribedCompanies } from "../../../../subscriptionButton/utils/localStorage.js";
import { createCompanyLogoTemplate } from "../../@common/companyLogo.js";

/**
 * @param {Object} props
 * @param {HTMLDivElement} props.container
 * @param {Company} props.company
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataTabId
 * @returns {HTMLDivElement}
 */
export function renderCompany({ container, company, dataTabId }) {
  container.classList.add("grid-item-company");

  const companyLogo = document.createElement("div");
  companyLogo.innerHTML = createCompanyLogoTemplate(company);

  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = Object.hasOwn(subscriptions, company.id);
  const subscriptionButton = createSubscriptionButton({
    company,
    isSubscribed,
    dataTabId,
    isGridView: true,
    container,
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
