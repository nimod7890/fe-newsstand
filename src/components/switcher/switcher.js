import { ButtonProps } from "../button/button.js";

/**
 * @typedef {Object} TabItem
 * @property {string} id
 * @property {string} text
 */

/**
 * @param {Object} params
 * @param {string} params.className 
 * @param {TabItem[]|ButtonProps[]} params.items 
 *  * @param {(event:Event)=>void} params.onClick 

 * @returns {HTMLUListElement}
 */
export function createSwitcher({ className, items, onClick }) {
  const list = document.createElement("ul");
  list.className = className;

  items.forEach((item, index) => {
    const listItem = document.createElement("li");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = className;
    input.id = item.id || item.iconId;

    if (index === 0) {
      input.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.classList.add("available-medium16");

    if (isTabItem(item)) {
      label.innerHTML = item.text;
    } else if (isButtonProps(item)) {
      const svg = `<svg class="icon">
                    <use xlink:href="src/assets/sprite.svg#${item.iconId}"></use>
                  </svg>`;
      label.innerHTML = svg;
    }

    input.addEventListener("change", onClick);

    listItem.appendChild(input);
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  return list;
}

/**
 * @param {TabItem | ButtonProps} item
 * @returns {item is TabItem}
 */
function isTabItem(item) {
  return item && typeof item.id === "string" && typeof item.text === "string";
}

/**
 * @param {TabItem | ButtonProps} item
 * @returns {item is ButtonProps}
 */
function isButtonProps(item) {
  return item && typeof item.iconId === "string";
}
