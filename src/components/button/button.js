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
  button.className = `button button-${color}`;

  const svg = `<div>
                  <svg class="button-icon">
                    <use xlink:href=src/assets/sprite.svg#${iconId}></use>
                  </svg>
                </div>`;

  button.insertAdjacentHTML("beforeend", svg);

  if (text) {
    button.insertAdjacentHTML(
      "beforeend",
      `<span class='available-medium12 button-text'>${text}</span>`
    );
  }

  return button;
}
