import { showDialog } from "../../components/overlays/dialog/dialog.js";
import { Company } from "../../types/news.js";
import { StorageKeys, removeFromLocalStorageArray } from "../../utils/localStorage.js";
import { updateNext } from "../renderNews/utils/updateStates.js";

/**
 * @param {Company} xcompany
 */
export function showUnsubscribeDialog(company) {
  const confirmProps = {
    text: "예, 해지합니다",
    onClick: () => {
      updateNext();
      removeFromLocalStorageArray(StorageKeys.SubscribedCompanies, company);
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
