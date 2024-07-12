/**
 *
 * @param {string} className
 * @returns {HTMLDivElement} overlay component
 */
export function createOverlayContainer(className) {
  const overlay = document.createElement("div");
  overlay.className = `overlay-container ${className}`;
  return overlay;
}
