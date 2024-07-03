import { createOverlayContainer } from "../overlay.js";

/**
 * @typedef {Object} DialogButtonProps
 * @property {HTMLElement} text
 * @property {string} [className='']
 * @property {Function} onClick

 */

/**
 * Shows a dialog with a message and custom confirm/cancel buttons.
 *
 * @param {{message:string;leftButtonProps:DialogButtonProps;rightButtonProps:DialogButtonProps}} message
 */
export function showDialog({ message, leftButtonProps, rightButtonProps }) {
  const dialog = createOverlayContainer("dialog");

  const messageElement = document.createElement("p");
  messageElement.className = "display-bold16";
  messageElement.innerHTML = message;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "dialog-buttons";

  const leftButton = createDialogButton(leftButtonProps, dialog);
  const rightButton = createDialogButton(rightButtonProps, dialog);

  buttonsContainer.appendChild(leftButton);
  buttonsContainer.appendChild(rightButton);

  dialog.appendChild(messageElement);
  dialog.appendChild(buttonsContainer);

  document.body.appendChild(dialog);
}

/**
 * @param {ButtonProps} buttonProps
 * @param {HTMLElement} dialog
 * @returns {HTMLButtonElement}
 */
function createDialogButton({ className, onClick, text }, dialog) {
  const button = document.createElement("button");
  button.className = `dialog-button available-medium16 ${className}`;
  button.textContent = text;
  button.onclick = () => {
    onClick();
    document.body.removeChild(dialog);
  };
  return button;
}
