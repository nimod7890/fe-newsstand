import { createSubscriptionButton } from "../components/subscriptionButton.js";

/**
 * storage 변경될 경우 구독 버튼 교체 이벤트 실행
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

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("storage", ({ detail }) => {
    const { company } = detail;
    const subscriptionButton = document.querySelector(`[data-company-id="${company.id}"]`);

    if (subscriptionButton) {
      const newButton = createSubscriptionButton(detail);
      subscriptionButton.replaceWith(newButton);
    }
  });
});

function updateSubscriptionButtons() {}
