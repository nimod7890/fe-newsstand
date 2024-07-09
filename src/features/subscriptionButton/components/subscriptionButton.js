import { createButton } from "../../../components/button/button.js";
import { Company } from "../../../types/news.js";
import { getObjectSubscribedCompanies } from "../utils/localStorage.js";
import { showSubscribeToast } from "./subscribeToast.js";
import { showUnsubscribeDialog } from "./unsubscribeDialog/unsubscribeDialog.js";

const buttonProps = {
  true: { iconId: "closed", ariaLabel: "구독해제" },
  false: { iconId: "plus", text: "구독하기", ariaLabel: "구독" },
};

/**
 * @param {Company} company
 * @param {"all-news-tab" | "subscribed-news-tab"} dataType
 * @return {HTMLButtonElement}
 */
export function createSubscriptionButton(company, dataType) {
  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = subscriptions.hasOwnProperty(company.id);

  const button = createButton(buttonProps[isSubscribed]);
  button.setAttribute("data-company-id", company.id);
  button.setAttribute("aria-label", `${company.name} ${buttonProps[isSubscribed].ariaLabel}`);
  button.addEventListener("click", () =>
    isSubscribed ? showUnsubscribeDialog(company, dataType) : showSubscribeToast(company)
  );
  return button;
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("storage", ({ detail }) => updateSubscriptionButtons(detail));
});

function updateSubscriptionButtons({ company, isSubscribed, dataType = "all-news-tab" }) {
  const subscriptionButton = document.querySelector(`[data-company-id="${company.id}"]`);

  if (subscriptionButton) {
    const newButton = createButton(buttonProps[isSubscribed]);
    newButton.setAttribute("data-company-id", company.id);
    newButton.setAttribute("aria-label", `${company.name} ${buttonProps[isSubscribed].ariaLabel}`);
    newButton.addEventListener("click", () =>
      isSubscribed ? showUnsubscribeDialog(company, dataType) : showSubscribeToast(company)
    );

    subscriptionButton.replaceWith(newButton);
  }
}
