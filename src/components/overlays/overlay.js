/**
 *
 * @param {string} className
 * @returns {HTMLDivElement} overlay component
 */
export function createOverlayContainer(className) {
  const container = document.createElement("div");
  container.className = `overlay-container ${className}`;
  return container;
}
