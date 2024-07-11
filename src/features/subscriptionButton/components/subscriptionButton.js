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
 * @property {"all-news-tab" | "subscribed-news-tab"} [dataTabId="all-news-tab"]
 * @property {boolean} [isGridView=false]
 */

/**
 * @param {SubscriptionButtonProps} props
 * @param {HTMLDivElement} container
 * @returns {HTMLButtonElement}
 */
export function createSubscriptionButton({ container, ...props }) {
  const {
    company: { id, name },
    isSubscribed,
    isGridView = false,
  } = props;

  const button = createButton(buttonProps[isSubscribed]);

  button.setAttribute("data-company-id", id);
  button.setAttribute("aria-label", `${name} ${buttonProps[isSubscribed].ariaLabel}`);
  (isGridView ? container : button).addEventListener("click", () => handleSubscriptionClick(props));

  return button;
}

/**
 * @param {SubscriptionButtonProps} props
 */
function handleSubscriptionClick(props) {
  const { company, isSubscribed, isGridView, dataTabId } = props;

  isSubscribed
    ? showUnsubscribeDialog({ company, isGridView, dataTabId })
    : showSubscribeToast(company, isGridView);
}
