import { createSubscriptionButton } from "../components/subscriptionButton.js";

const SUBSCRIPTION_EVENT_KEY = "subscriptionUpdate";

/**
 * storage 변경될 경우 구독 버튼 교체 이벤트 실행
 *
 * @param {Object} props
 * @param {Company} props.company
 * @param {boolean} props.isSubscribed
 * @param {"all-news-tab" | "subscribed-news-tab"} props.dataType
 */
export function dispatchSubscriptionUpdateEvent(detail) {
  const event = new CustomEvent(SUBSCRIPTION_EVENT_KEY, { detail });
  window.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener(SUBSCRIPTION_EVENT_KEY, ({ detail }) => {
    const { company } = detail;
    const subscriptionButton = document.querySelector(`[data-company-id="${company.id}"]`);

    if (subscriptionButton) {
      const newButton = createSubscriptionButton(detail);
      subscriptionButton.replaceWith(newButton);
    }
  });
});
