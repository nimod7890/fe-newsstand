import { createOverlayContainer } from "../overlay.js";

/**
 * @typedef {Object} DialogButtonProps
 * @property {HTMLElement} text
 * @property {string} [className='']
 * @property {Function} onClick

 */

/**
 *
 * @param {{message:string;leftButtonProps:DialogButtonProps;rightButtonProps:DialogButtonProps}} dialogProps
 */
export function showDialog({ message, leftButtonProps, rightButtonProps }) {
  const dialogComponent = createOverlayContainer("dialog border-box");

  const messageString = `<p class='border-box display-medium16'>${message}</p>`;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "dialog-buttons";

  const leftButtonComponent = createDialogButton(leftButtonProps, dialogComponent);
  const rightButtonComponent = createDialogButton(rightButtonProps, dialogComponent);
  buttonsContainer.append(leftButtonComponent, rightButtonComponent);

  dialogComponent.innerHTML = messageString;
  dialogComponent.appendChild(buttonsContainer);

  document.body.appendChild(dialogComponent);
}

/**
 * @param {ButtonProps} buttonProps
 * @param {HTMLDivElement} dialog
 * @returns {HTMLButtonElement}
 */
function createDialogButton({ className = "", onClick, text }, dialog) {
  const button = document.createElement("button");
  button.className = `dialog-button border-box available-medium16 ${className}`;
  button.textContent = text;
  button.onclick = () => {
    onClick && onClick();
    document.body.removeChild(dialog);
  };
  return button;
}
