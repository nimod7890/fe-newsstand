import { createIcon } from "../../../../../components/icon/icon.js";

/**
 * @param {Object} this.props
 * @param {'prev' | 'next'} direction
 * @param {Function} onClick
 * @returns {HTMLButtonElement}
 */
export function createAdjacentButton({ direction, onClick }) {
  const button = document.createElement("button");
  button.className = `adjacent-button ${direction}`;
  button.setAttribute("aria-label", direction === "prev" ? "이전" : "다음");

  const icon = createIcon({ iconId: "arrow" });
  button.appendChild(icon);

  button.addEventListener("click", onClick);

  return button;
}
