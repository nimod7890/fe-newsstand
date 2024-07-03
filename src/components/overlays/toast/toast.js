import { createOverlayContainer } from "../overlay.js";

/**
 * @param {string} message
 * @param {number} [time=5000]
 */
export function showToast(message, time = 5000) {
  const toastContainer = document.getElementById("toast-container");

  if (!toastContainer) {
    throw Error("toast container가 정의되지 않았습니다. ");
  }

  const toast = createOverlayContainer("toast");
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fadeout");
    toast.addEventListener("animationend", toast.remove);
  }, time);
}
