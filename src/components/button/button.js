import { convertStringToFragment } from "../../utils/convertStringToFragment.js";
import { createIcon } from "../icon/icon.js";

/**
 * @typedef {Object} ButtonProps
 * @property {'white' | 'gray'} [color='white']
 * @property {string} [text='']
 * @property {"arrow" | "plus" | "closed" | "grid-view" | "list-view" | "newspaper"} [iconId]
 */

export const ButtonProps = {};

/**
 * @param {ButtonProps} props
 *
 * @returns {HTMLButtonElement}
 */
export function createButton({ iconId, text = "", color = "white" }) {
  if (!iconId) {
    throw Error("iconId는 필수 property입니다.");
  }

  const button = document.createElement("button");
  button.className = `button button-${color} border-box`;

  const icon = createIcon({ className: "button-icon", iconId });
  button.appendChild(icon);

  if (text) {
    const label = convertStringToFragment(
      `<span class='available-medium12 button-text'>${text}</span>`
    );
    button.append(label);
  }

  return button;
}
