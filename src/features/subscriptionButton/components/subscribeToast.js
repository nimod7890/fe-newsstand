import { showToast } from "../../../components/overlays/toast/toast.js";
import { switchCompanyTab } from "../../renderNews/utils/updateStates.js";
import { dispatchStorageEvent } from "../utils/dispatchStorageEvent.js";
import { addSubscribedCompany } from "../utils/localStorage.js";

const TOAST_SHOWING_TIME = 5000;

/**
 * @param {Company} company
 */
export function showSubscribeToast(company) {
  showToast("내가 구독한 언론사에 추가되었습니다.", TOAST_SHOWING_TIME);
  addSubscribedCompany(company);
  setTimeout(() => {
    switchCompanyTab("subscribed-news-tab");
  }, TOAST_SHOWING_TIME);

  dispatchStorageEvent({ company, isSubscribed: true });
}
