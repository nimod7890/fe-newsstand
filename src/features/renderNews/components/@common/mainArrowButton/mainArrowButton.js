import { createIcon } from "../../../../../components/icon/icon.js";

/**
 * @typedef {Object} CompanyNavButtonProps
 * @property {'prev' | 'next'} direction - The direction of navigation
 * @property {Function} onClick - The click handler function
 */

/**
 * @param {CompanyNavButtonProps} props
 * @returns {HTMLButtonElement}
 */
export function createMainArrowButton({ direction, onClick }) {
  const button = document.createElement("button");
  button.className = `company-nav-button ${direction}`;
  button.setAttribute("aria-label", direction === "prev" ? "이전 언론사" : "다음 언론사");

  const icon = createIcon({ iconId: "arrow" });
  button.appendChild(icon);

  button.addEventListener("click", onClick);

  return button;
}
