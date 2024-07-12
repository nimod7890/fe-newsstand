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

  const logoContainer = document.createElement("div");
  logoContainer.innerHTML = createCompanyLogoTemplate(company);

  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = Object.hasOwn(subscriptions, company.id);
  const subscriptionButtonContainer = createSubscriptionButton({
    company,
    isSubscribed,
    dataTabId,
    isGridView: true,
    container,
  });

  subscriptionButtonContainer.classList.add("hover-hidden");

  container.addEventListener("mouseenter", () => {
    logoContainer.classList.add("hover-hidden");
    subscriptionButtonContainer.classList.remove("hover-hidden");
  });

  container.addEventListener("mouseleave", () => {
    logoContainer.classList.remove("hover-hidden");
    subscriptionButtonContainer.classList.add("hover-hidden");
  });

  container.append(logoContainer, subscriptionButtonContainer);
}
