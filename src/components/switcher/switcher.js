import { ButtonProps } from "../button/button.js";
import { createIcon } from "../icon/icon.js";

/**
 * @typedef {Object} TabItem
 * @property {string} id
 * @property {string} text
 */

/**
 * @param {Object} params
 * @param {string} params.className 
 * @param {TabItem[]|ButtonProps[]} params.items 
 * @param {(event:Event)=>void} params.onClick 

 * @returns {HTMLUListElement}
 */
export function createSwitcher({ className, items, onClick }) {
  const switcher = items.reduce((list, item, itemIndex) => {
    const listItem = document.createElement("li");

    const input = createInput({ item, itemIndex, name: className, onClick });
    const label = createLabel(item);

    listItem.append(input, label);

    list.appendChild(listItem);

    return list;
  }, document.createElement("ul"));

  switcher.classList.add(className);

  return switcher;
}

/**
 *
 * @param {Object} params
 * @param {TabItem|ButtonProps} params.item
 * @param {string} params.name
 * @param {number} params.itemIndex
 * @param {(event:Event)=>void} params.onClick
 *
 * @returns {HTMLInputElement}
 */
function createInput({ item, name, itemIndex, onClick }) {
  const input = document.createElement("input");
  input.id = getItemId(item);
  input.name = name;
  input.type = "radio";
  input.addEventListener("change", onClick);

  if (itemIndex === 0) {
    input.checked = true;
  }

  return input;
}

/**
 * @param {TabItem|ButtonProps} item
 *
 * @returns {HTMLLabelElement}
 */
function createLabel(item) {
  const label = document.createElement("label");
  label.classList.add("available-medium16");

  label.htmlFor = getItemId(item);

  const innerContent = isTabItem(item) ? item.text : createIcon({ iconId: item.iconId });
  label.append(innerContent);

  return label;
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
 * @returns {string} itemId
 */
function getItemId(item) {
  return isTabItem(item) ? item.id : item.iconId;
}
