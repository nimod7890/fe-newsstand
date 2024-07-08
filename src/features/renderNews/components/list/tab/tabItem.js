/**
 * @param {Object} props
 * @param {string} props.innerText
 * @param {string} props.children
 * @param {boolean} props.isSelect
 * @returns {HTMLButtonElement}
 */
export function createTabItem({ innerText, children, isSelected }) {
  const button = document.createElement("button");
  button.className = classMapping[isSelected];
  button.innerHTML = `<p>${innerText}</p>`;

  if (isSelected) {
    button.insertAdjacentHTML("beforeend", children);
  }

  return button;
}

const classes = {
  base: "list-tab-item",
  unselected: "available-medium14",
  selected: "selected-bold14 selected-tab",
};

const classMapping = {
  true: `${classes.base} ${classes.selected}`,
  false: `${classes.base} ${classes.unselected}`,
};
