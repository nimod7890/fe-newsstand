import { createButton } from "../../components/button/button.js";
import {
  StorageKeys,
  addToLocalStorageArray,
  getFromLocalStorage,
} from "../../utils/localStorage.js";
import { showToast } from "../../components/overlays/toast/toast.js";
import { Company } from "../../types/news.js";
import { showUnsubscribeDialog } from "../unsubscribeDialog/unsubscribeDialog.js";
import { switchCompanyTab } from "../renderNews/utils/updateStates.js";

const TOAST_SHOWING_TIME = 5000;

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
  const subscriptions = getFromLocalStorage(StorageKeys.SubscribedCompanies);
  const isSubscribed = subscriptions.some(({ id: companyId }) => companyId === company.id);
  const button = createButton(buttonProps[isSubscribed]);

  button.setAttribute("aria-label", `${company.name} ${buttonProps[isSubscribed].ariaLabel}`);

  button.addEventListener("click", () => handleSubscriptionClick(isSubscribed, company));

  return button;
}

/**
 * @param {boolean} isSubscribed
 * @param {Company} company
 */
function handleSubscriptionClick(isSubscribed, company) {
  if (isSubscribed) {
    showUnsubscribeDialog(company);
  } else {
    showToast("내가 구독한 언론사에 추가되었습니다.", TOAST_SHOWING_TIME);
    addToLocalStorageArray(StorageKeys.SubscribedCompanies, company);
    setTimeout(() => {
      switchCompanyTab("subscribed-news-tab");
    }, TOAST_SHOWING_TIME);
  }
}
