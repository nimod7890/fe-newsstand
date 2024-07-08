/**
 * @param {"arrow" | "plus" | "closed" | "grid-view" | "list-view" | "newspaper"} iconId
 * @param {string} className
 * @returns {string} icon
 */
export function createIconTemplateStrings({ className = "", iconId }) {
  return `<svg class='${className}'>
            <use xlink:href=src/assets/sprite.svg#${iconId}></use>
          </svg>`;
}
