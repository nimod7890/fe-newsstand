/**
 * storage 변경될 경우 구독 버튼 교체
 *
 * @param {Object} props
 * @param {Company} props.company
 * @param {boolean} props.isSubscribed
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataType
 */
export function dispatchStorageEvent(detail) {
  const event = new CustomEvent("storage", { detail });
  window.dispatchEvent(event);
}
