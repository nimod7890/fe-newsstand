import { showToast } from "../../../components/overlays/toast/toast.js";
import {
  rerenderCompanyInGridView,
  switchCompanyTab,
} from "../../renderNews/utils/updateStates.js";
import { dispatchSubscriptionUpdateEvent } from "../utils/dispatchSubscriptionUpdateEvent.js";
import { addSubscribedCompany } from "../utils/localStorage.js";

const TOAST_SHOWING_TIME = 5000;

/**
 * @param {Company} company
 * @param {boolean} [isGridView=false]
 */
export function showSubscribeToast(company, isGridView) {
  showToast("내가 구독한 언론사에 추가되었습니다.", TOAST_SHOWING_TIME);
  addSubscribedCompany(company);

  setTimeout(async () => {
    await switchCompanyTab("subscribed-news-tab");
  }, TOAST_SHOWING_TIME);

  isGridView
    ? rerenderCompanyInGridView()
    : dispatchSubscriptionUpdateEvent({ company, isSubscribed: true });
}
