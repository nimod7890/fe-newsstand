import { showDialog } from "../../../../components/overlays/dialog/dialog.js";
import { Company } from "../../../../types/news.js";
import { rerenderListViewCompanyInSubscribedTab } from "../../../renderNews/utils/updateStates.js";
import { dispatchStorageEvent } from "../../utils/dispatchStorageEvent.js";
import { removeSubscribedCompany } from "../../utils/localStorage.js";

/**
 * @param {Company} company
 * @param {"all-news-tab" | "subscribed-news-tab"} dataType
 */
export function showUnsubscribeDialog(company, dataType) {
  const confirmProps = {
    text: "예, 해지합니다",
    onClick: () => {
      removeSubscribedCompany(company.id);
      dispatchStorageEvent({ company, isSubscribed: false });
      dataType === "subscribed-news-tab" && rerenderListViewCompanyInSubscribedTab();
    },
  };

  const cancelProps = {
    text: "아니오",
    className: "cancel",
  };

  showDialog({
    message: `<strong>${company.name}</strong>을(를)<br/> 구독해지하시겠습니까?`,
    leftButtonProps: confirmProps,
    rightButtonProps: cancelProps,
  });
}
