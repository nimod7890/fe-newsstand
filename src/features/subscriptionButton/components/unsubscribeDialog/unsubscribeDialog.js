import { showDialog } from "../../../../components/overlays/dialog/dialog.js";
import { Company } from "../../../../types/news.js";
import {
  rerenderCompanyInGridView,
  rerenderCompanyInSubscribedTab,
} from "../../../renderNews/utils/updateStates.js";
import { dispatchSubscriptionUpdateEvent } from "../../utils/dispatchSubscriptionUpdateEvent.js";
import { removeSubscribedCompany } from "../../utils/localStorage.js";

/**
 * @param {Object} props
 * @param {Company} props.company
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataType
 * @param {boolean} props.isGridView
 */
export function showUnsubscribeDialog(props) {
  const {
    company: { name },
  } = props;

  const confirmProps = {
    text: "예, 해지합니다",
    onClick: () => handleUnsubscribe(props),
  };

  const cancelProps = {
    text: "아니오",
    className: "cancel",
  };

  showDialog({
    message: `<strong>${name}</strong>을(를)<br/> 구독해지하시겠습니까?`,
    leftButtonProps: confirmProps,
    rightButtonProps: cancelProps,
  });
}

/**
 * @param {Object} props
 * @param {Company} props.company
 * @param {boolean} props.isGridView
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataType
 */
function handleUnsubscribe({ company, isGridView, dataType }) {
  removeSubscribedCompany(company.id);

  if (dataType === "subscribed-news-tab") {
    rerenderCompanyInSubscribedTab();
  } else if (isGridView) {
    rerenderCompanyInGridView();
  } else {
    dispatchSubscriptionUpdateEvent({ company, isSubscribed: false });
  }
}
