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
 *
 * @return {HTMLButtonElement}
 */
export function createSubscriptionButton(company) {
  const subscriptions = getObjectSubscribedCompanies();
  const isSubscribed = subscriptions.hasOwnProperty(company.id);

  const button = createButton(buttonProps[isSubscribed]);
  button.setAttribute("data-company-id", company.id);
  button.setAttribute("aria-label", buttonProps[isSubscribed].ariaLabel);
  button.addEventListener("click", () =>
    isSubscribed ? showUnsubscribeDialog(company) : showSubscribeToast(company)
  );
  return button;
}

/** storage 변경될 경우 구독 버튼 교체 */

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("storage", (event) => updateSubscriptionButtons(event.detail));
});

function updateSubscriptionButtons({ company, isSubscribed }) {
  const subscriptionButton = document.querySelector(`[data-company-id="${company.id}"]`);

  if (subscriptionButton) {
    const newButton = createButton(buttonProps[isSubscribed]);
    newButton.setAttribute("aria-label", `${company.name} ${buttonProps[isSubscribed].ariaLabel}`);
    newButton.addEventListener("click", () => handleSubscriptionClick([isSubscribed], company));

    subscriptionButton.replaceWith(newButton);
  }
}
