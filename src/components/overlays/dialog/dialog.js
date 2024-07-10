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
  const dialog = createOverlayContainer("dialog border-box");

  const messageElement = `<p class='border-box display-medium16'>${message}</p>`;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "dialog-buttons";

  const leftButton = createDialogButton(leftButtonProps, dialog);
  const rightButton = createDialogButton(rightButtonProps, dialog);
  buttonsContainer.append(leftButton, rightButton);

  dialog.innerHTML = messageElement;
  dialog.appendChild(buttonsContainer);

  document.body.appendChild(dialog);
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
