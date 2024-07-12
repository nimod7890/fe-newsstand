import { createOverlayContainer } from "../overlay.js";

/**
 * @param {string} message
 * @param {number} [time=5000]
 */
export function showToast(message, time = 5000) {
  const toastContainerElement = document.getElementById("toast-container");

  if (!toastContainerElement) {
    throw Error("toast container가 정의되지 않았습니다. ");
  }

  const toastComponent = createOverlayContainer("toast");
  toastComponent.textContent = message;
  toastContainerElement.appendChild(toastComponent);

  setTimeout(() => {
    toastComponent.classList.add("fadeout");
    toastComponent.addEventListener("animationend", toastComponent.remove);
  }, time);
}
