import { createButton } from "../../../components/button/button.js";
import { showSubscribeToast } from "../components/subscribeToast.js";
import { showUnsubscribeDialog } from "../components/unsubscribeDialog/unsubscribeDialog.js";

const buttonProps = {
  true: { iconId: "closed", ariaLabel: "구독해제" },
  false: { iconId: "plus", text: "구독하기", ariaLabel: "구독" },
};

/**
 * @param {Object} props
 * @param {Company} props.company
 * @param {boolean} props.isSubscribed
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataType
 * @returns {HTMLButtonElement}
 */
export function createSubscriptionButton({ company, isSubscribed, dataType }) {
  const button = createButton(buttonProps[isSubscribed]);
  button.setAttribute("data-company-id", company.id);
  button.setAttribute("aria-label", `${company.name} ${buttonProps[isSubscribed].ariaLabel}`);
  button.addEventListener("click", () =>
    isSubscribed ? showUnsubscribeDialog(company, dataType) : showSubscribeToast(company)
  );
  return button;
}
