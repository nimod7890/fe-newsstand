import { createButton } from "../../../components/button/button.js";
import { Company } from "../../../types/news.js";
import { showSubscribeToast } from "../components/subscribeToast.js";
import { showUnsubscribeDialog } from "../components/unsubscribeDialog/unsubscribeDialog.js";

const buttonProps = {
  true: { iconId: "closed", ariaLabel: "구독해제" },
  false: { iconId: "plus", text: "구독하기", ariaLabel: "구독" },
};

/**
 * @typedef {Object} SubscriptionButtonProps
 * @property {Company} company
 * @property {boolean} isSubscribed
 * @property {"all-news-tab" | "subscribed-news-tab"} [dataType="all-news-tab"]
 * @property {boolean} [isGridView=false]
 */

/**
 * @param {SubscriptionButtonProps} props
 * @returns {HTMLButtonElement}
 */
export function createSubscriptionButton(props) {
  const {
    company: { id, name },
    isSubscribed,
  } = props;

  const button = createButton(buttonProps[isSubscribed]);

  button.setAttribute("data-company-id", id);
  button.setAttribute("aria-label", `${name} ${buttonProps[isSubscribed].ariaLabel}`);
  button.addEventListener("click", () => handleSubscriptionClick(props));

  return button;
}

/**
 * @param {SubscriptionButtonProps} props
 */
function handleSubscriptionClick(props) {
  const { company, isSubscribed, isGridView, dataType } = props;

  isSubscribed
    ? showUnsubscribeDialog({ company, isGridView, dataType })
    : showSubscribeToast(company, isGridView);
}
