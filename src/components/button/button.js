/**
 * @typedef {Object} ButtonOptions
 * @property {'white' | 'gray'} [color='white']
 * @property {string} [text='']
 * @property {string} [iconId]
 */

/**
 * @param {ButtonOptions} options
 *
 * @returns {HTMLButtonElement}
 */
export function createButton({ iconId, text = "", color = "white" }) {
  if (!iconId) {
    throw Error("icon은 필수 property입니다.");
  }

  const button = document.createElement("button");
  button.className = `button button-${color}`;

  const div = document.createElement("div");

  const svg = `<svg class="button-icon">
    <use xlink:href=src/assets/sprite.svg#${iconId}></use>
  </svg>`;

  div.innerHTML = svg;
  button.appendChild(div);

  if (text) {
    const textSpan = document.createElement("span");
    textSpan.className = `available-medium12 button-text`;
    textSpan.textContent = text;
    button.appendChild(textSpan);
  }

  return button;
}
