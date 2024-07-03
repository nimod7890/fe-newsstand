import { showDialog } from "../../components/overlays/dialog/dialog.js";

export function showUnsubscribeDialog() {
  const confirmProps = {
    text: "예, 해지합니다",
    onClick: () => console.log("Confirmed"),
  };

  const cancelProps = {
    text: "아니오",
    className: "cancel",
    onClick: () => console.log("Cancelled"),
  };

  showDialog({
    message: `<strong>해당 언론사</strong>을(를)<br/> 구독해지하시겠습니까?`,
    leftButtonProps: confirmProps,
    rightButtonProps: cancelProps,
  });
}
