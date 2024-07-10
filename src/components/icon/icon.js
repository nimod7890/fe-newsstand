import { convertStringToFragment } from "../../utils/convertStringToFragment.js";

/**
 * @param {"arrow" | "plus" | "closed" | "grid-view" | "list-view" | "newspaper"} iconId
 * @param {string} className
 * @returns {SVGElement} icon
 */
export function createIcon({ className = "", iconId }) {
  const iconString = `<svg class='${className}'>
                        <use xlink:href=src/assets/sprite.svg#${iconId}></use>
                      </svg>`;

  return convertStringToFragment(iconString);
}
