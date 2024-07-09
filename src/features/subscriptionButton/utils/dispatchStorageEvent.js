/**
 * @param {Object} props
 * @param {Company} props.company
 * @param {boolean} props.isSubscribed
 */
export function dispatchStorageEvent({ company, isSubscribed }) {
  const event = new CustomEvent("storage", {
    detail: { company, isSubscribed },
  });
  window.dispatchEvent(event);
}
