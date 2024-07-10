/**
 *
 * @param {string} htmlString
 * @returns {HTMLElement}
 */
export function convertStringToFragment(htmlString) {
  return document.createRange().createContextualFragment(htmlString);
}
